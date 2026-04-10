import { type MouseEventHandler, useCallback, useMemo } from 'react';
import { DEFAULT_COLORS, DEFAULT_STROKE_WIDTH, DefaultHint } from './defaults';
import { useControllableState } from './hooks/use-controllable-state';
import { useHoveredState } from './hooks/use-hovered-state';
import { useMousePosition } from './hooks/use-mouse-position';
import { useViewbox } from './hooks/use-viewbox';
import type { MultipleSelectMapProps } from './types';
import { getStrokeDasharray } from './utils/get-stroke-dasharray';
import { parseStateColor } from './utils/parse-state-color';

export function MultiSelectMap<T extends string>({
  colors,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  value,
  onChange,
  defaultValue = [],
  map,
  disableClick,
  disableHover,
  borderStyle,
  HintComponent = DefaultHint,
  className,
  ...rest
}: MultipleSelectMapProps<T>) {
  const parsedColors = useMemo(
    () => ({
      ...DEFAULT_COLORS,
      ...colors
    }),
    [colors]
  );

  const { x, y } = useMousePosition();
  const [selectedStates, setSelectedStates] = useControllableState({
    value,
    onChange,
    defaultValue
  });
  const { ref, viewBox } = useViewbox(map);
  const { hoveredState, handleMouseEnter, handleMouseLeave } =
    useHoveredState<T>();
  const states = useMemo(() => Object.keys(map) as T[], [map]);

  const handleClick = useCallback<MouseEventHandler<SVGPathElement>>(
    (event) => {
      const path = event.target as SVGPathElement;
      const currentState = path.dataset.state as T;

      setSelectedStates?.(
        selectedStates.includes(currentState)
          ? selectedStates.filter((s) => s !== currentState)
          : [...selectedStates, currentState]
      );
    },
    [selectedStates, setSelectedStates]
  );

  return (
    <>
      {/** biome-ignore lint/a11y/noSvgWithoutTitle: no title is needed */}
      <svg
        version="1.1"
        ref={ref}
        viewBox={viewBox}
        className={className}
        style={className ? undefined : { width: '100%', height: '100%' }}
        {...rest}
      >
        {states?.map((code) => {
          const isHovered = hoveredState === code;
          const isSelected = selectedStates.includes(code);

          const colorParams = {
            state: code,
            isHovered,
            isSelected
          };

          return (
            // biome-ignore lint/a11y/noStaticElementInteractions: has to be a path
            <path
              key={code}
              onClick={disableClick ? undefined : handleClick}
              data-state={code}
              data-hovered={isHovered}
              data-selected={isSelected}
              onMouseEnter={disableHover ? undefined : handleMouseEnter}
              onMouseLeave={disableHover ? undefined : handleMouseLeave}
              d={map[code]}
              style={{
                fill: parseStateColor(parsedColors.fill, colorParams),
                stroke: parseStateColor(parsedColors.stroke, colorParams),
                cursor: disableClick ? 'default' : 'pointer',
                strokeDasharray: getStrokeDasharray(borderStyle)
              }}
            />
          );
        })}
      </svg>
      {hoveredState && (
        <HintComponent mouseX={x} mouseY={y} state={hoveredState} />
      )}
    </>
  );
}
