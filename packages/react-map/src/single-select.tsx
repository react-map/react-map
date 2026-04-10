import { type MouseEventHandler, useCallback, useId, useMemo } from 'react';
import { DEFAULT_COLORS, DEFAULT_STROKE_WIDTH, DefaultHint } from './defaults';
import { useControllableState } from './hooks/use-controllable-state';
import { useHoveredState } from './hooks/use-hovered-state';
import { useMousePosition } from './hooks/use-mouse-position';
import { useViewbox } from './hooks/use-viewbox';
import type { MapColors, SingleSelectMapProps } from './types';
import { getStrokeDasharray } from './utils/get-stroke-dasharray';
import { parseStateColor } from './utils/parse-state-color';

export function SingleSelectMap<T extends string>({
  colors,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  value,
  onChange,
  defaultValue = null,
  map,
  disableClick,
  disableHover,
  borderStyle,
  HintComponent = DefaultHint,
  className,
  ...rest
}: SingleSelectMapProps<T>) {
  const parsedColors: MapColors<T> = useMemo(
    () => ({
      ...DEFAULT_COLORS,
      ...colors
    }),
    [colors]
  );

  const instanceId = useId();
  const { x, y } = useMousePosition();
  const [selectedState, setSelectedState] = useControllableState({
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

      setSelectedState?.(selectedState === currentState ? null : currentState);
    },
    [selectedState, setSelectedState]
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
        {states?.map((state) => {
          const colorParams = {
            state,
            isHovered: hoveredState === state,
            isSelected: selectedState === state
          };

          return (
            // biome-ignore lint/a11y/noStaticElementInteractions: has to be a path
            <path
              key={state}
              onClick={disableClick ? undefined : handleClick}
              data-state={state}
              onMouseEnter={disableHover ? undefined : handleMouseEnter}
              onMouseLeave={disableHover ? undefined : handleMouseLeave}
              id={`${state}-${instanceId}`}
              d={map[state]}
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
      {!disableHover && hoveredState && (
        <HintComponent mouseX={x} mouseY={y} state={hoveredState} />
      )}
    </>
  );
}
