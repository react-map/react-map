import { type MouseEventHandler, useMemo } from 'react';
import { DEFAULT_COLORS, DEFAULT_STROKE_WIDTH, DefaultHint } from './defaults';
import { useControllableState } from './hooks/use-controllable-state';
import { useHoveredState } from './hooks/use-hovered-state';
import { useMousePosition } from './hooks/use-mouse-position';
import { useViewbox } from './hooks/use-viewbox';
import type { MultipleSelectMapProps } from './types';
import { getStateColor } from './utils/get-state-color';
import { getStrokeDasharray } from './utils/get-stroke-dasharray';

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
  const { hoveredState, handleMouseEnter, handleMouseLeave } = useHoveredState(
    selectedStates,
    parsedColors
  );
  const states = useMemo(() => Object.keys(map) as T[], [map]);

  const handleClick: MouseEventHandler<SVGPathElement> = (event) => {
    const path = event.target as SVGPathElement;
    const currentState = path.dataset.state as T;

    if (selectedStates.includes(currentState)) {
      path.style.fill = getStateColor(parsedColors.fill, currentState);
      setSelectedStates?.(
        selectedStates.filter((state) => state !== currentState)
      );
      return;
    }

    path.style.fill = getStateColor(parsedColors.select, currentState);
    setSelectedStates?.([...selectedStates, currentState]);
  };

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
        {states?.map((code) => (
          // biome-ignore lint/a11y/noStaticElementInteractions: has to be a path
          <path
            key={code}
            onClick={disableClick ? undefined : handleClick}
            data-state={code}
            onMouseEnter={disableHover ? undefined : handleMouseEnter}
            onMouseLeave={disableHover ? undefined : handleMouseLeave}
            d={map[code]}
            style={{
              fill: getStateColor(parsedColors.fill, code),
              stroke: getStateColor(parsedColors.stroke, code),
              cursor: disableClick ? 'default' : 'pointer',
              strokeDasharray: getStrokeDasharray(borderStyle)
            }}
          />
        ))}
      </svg>
      {hoveredState && (
        <HintComponent mouseX={x} mouseY={y} state={hoveredState} />
      )}
    </>
  );
}
