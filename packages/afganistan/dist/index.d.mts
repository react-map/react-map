import React from 'react';

interface CityColorMap {
    [key: string]: string;
}
type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';
interface AfganistanProps {
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
declare const Afganistan: ({ type, size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, hints, selectColor, hintTextColor, hintBackgroundColor, hintPadding, hintBorderRadius, cityColors, disableClick, disableHover, borderStyle, }: AfganistanProps) => React.JSX.Element | null;

export { Afganistan as default };
