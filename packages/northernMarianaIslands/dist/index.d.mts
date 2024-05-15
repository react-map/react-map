import React from 'react';

declare const Northernmarianaislands: ({ type, size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, hints, selectColor, hintTextColor, hintBackgroundColor, hintPadding, hintBorderRadius, }: NorthernmarianaislandsProps) => React.JSX.Element | null;
interface NorthernmarianaislandsProps {
    type?: 'select-single' | 'select-multiple';
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
    hintBorderRadius?: string;
    onSelect?: (state: string, selectedStates?: string[]) => void;
}

export { Northernmarianaislands as default };
