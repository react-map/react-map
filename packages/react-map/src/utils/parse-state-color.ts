import type { MapColorParams } from '../types';

export function parseStateColor<T extends string>(
  color: string | ((params: MapColorParams<T>) => string),
  params: MapColorParams<T>
) {
  return typeof color === 'string' ? color : color(params);
}
