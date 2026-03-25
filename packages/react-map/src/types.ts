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

export interface MapColors<T extends string> {
  stroke: string | ((state: T) => string);
  fill: string | ((state: T) => string);
  hover: string | ((state: T) => string);
  select: string | ((state: T) => string);
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
  onChange?: Dispatch<SetStateAction<T | null>>;
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
