import React from 'react';

declare const Iran: ({ type, size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, hints, selectColor, hintTextColor, hintBackgroundColor, hintPadding, hintBorderRadius, }: IranProps) => React.JSX.Element | null;
interface IranProps {
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

export { Iran as default };
