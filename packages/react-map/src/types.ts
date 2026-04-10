import type {
  ComponentProps,
  ComponentType,
  Dispatch,
  SetStateAction
} from 'react';

export type BorderStyle =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'dash-dot'
  | 'dash-double-dot';

export interface MapColorParams<T> {
  state: T;
  isHovered: boolean;
  isSelected: boolean;
}

export interface MapColors<T extends string> {
  stroke: string | ((params: MapColorParams<T>) => string);
  fill: string | ((params: MapColorParams<T>) => string);
}

interface MapProps<T extends string>
  extends Omit<ComponentProps<'svg'>, 'onSelect' | 'onChange'> {
  colors: Partial<MapColors<T>>;
  strokeWidth?: number;
  map: Record<T, string>;
  disableClick?: boolean;
  disableHover?: boolean;
  borderStyle?: BorderStyle;
  HintComponent?: ComponentType<HintProps<T>>;
}

export interface SingleSelectMapProps<T extends string> extends MapProps<T> {
  value?: T | null;
  onChange?: (value: T | null) => void;
  defaultValue?: T | null;
}

export interface MultipleSelectMapProps<T extends string> extends MapProps<T> {
  value?: T[];
  onChange?: Dispatch<SetStateAction<T[]>>;
  defaultValue?: T[];
}

export interface HintProps<T extends string> {
  mouseX: number;
  mouseY: number;
  state: T;
}
