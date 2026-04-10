import type { HintProps, MapColors } from './types';

export const DEFAULT_STROKE_WIDTH = 0.5;

export const DEFAULT_COLORS: MapColors<string> = {
  stroke: 'black',
  fill: ({ isHovered, isSelected }) =>
    isHovered ? '#303030' : isSelected ? '#ff0000' : 'white'
};

export function DefaultHint<T extends string>({
  mouseX,
  mouseY,
  state
}: HintProps<T>) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: 5,
        border: '1px solid #ccc',
        pointerEvents: 'none',
        zIndex: 1000,
        position: 'fixed',
        top: mouseY + 20,
        left: mouseX + 20,
        color: 'black'
      }}
    >
      {state}
    </div>
  );
}
