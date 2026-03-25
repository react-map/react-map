import { type MouseEventHandler, useId, useMemo } from 'react';
import { DEFAULT_COLORS, DEFAULT_STROKE_WIDTH, DefaultHint } from './defaults';
import { useControllableState } from './hooks/use-controllable-state';
import { useHoveredState } from './hooks/use-hovered-state';
import { useMousePosition } from './hooks/use-mouse-position';
import { useViewbox } from './hooks/use-viewbox';
import type { SingleSelectMapProps } from './types';
import { getStateColor } from './utils/get-state-color';
import { getStrokeDasharray } from './utils/get-stroke-dasharray';

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
  const parsedColors = useMemo(
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
  const { hoveredState, handleMouseEnter, handleMouseLeave } = useHoveredState(
    selectedState,
    parsedColors
  );
  const states = useMemo(() => Object.keys(map) as T[], [map]);

  const handleClick: MouseEventHandler<SVGPathElement> = (event) => {
    const path = event.target as SVGPathElement;
    const currentState = path.dataset.state as T;

    if (selectedState === currentState) {
      path.style.fill = getStateColor(parsedColors.fill, currentState);
      setSelectedState?.(null);
      return;
    }

    if (selectedState) {
      const previousPath = document.getElementById(
        `${selectedState}-${instanceId}`
      );
      if (previousPath) {
        previousPath.style.fill = getStateColor(
          parsedColors.fill,
          selectedState
        );
      }
    }

    setSelectedState?.(currentState);
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
        {states?.map((state) => (
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
              fill: getStateColor(parsedColors.fill, state),
              stroke: getStateColor(parsedColors.stroke, state),
              cursor: disableClick ? 'default' : 'pointer',
              strokeDasharray: getStrokeDasharray(borderStyle)
            }}
          />
        ))}
      </svg>
      {!disableHover && hoveredState && (
        <HintComponent mouseX={x} mouseY={y} state={hoveredState} />
      )}
    </>
  );
}
