import React from 'react';

interface CityColorMap {
    [key: string]: string;
}
type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';
interface BarbadosProps {
    type: 'select-single' | 'select-multiple';
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    selectColor?: string;
    hints?: boolean;
    hintTextColor?: string;
    hintBackgroundColor?: string;
    hintPadding?: string;
    hintBorderRadius?: number;
    onSelect?: (state: string | null, selectedStates?: string[]) => void;
    cityColors?: CityColorMap;
    disableClick?: boolean;
    disableHover?: boolean;
    borderStyle?: BorderStyle;
}
declare const Barbados: ({ type, size, mapColor, strokeColor, strokeWidth, hoverColor, selectColor, hints, hintTextColor, hintBackgroundColor, hintPadding, hintBorderRadius, onSelect, cityColors, disableClick, disableHover, borderStyle, }: BarbadosProps) => React.JSX.Element | null;

export { Barbados as default };
