import React from 'react';

declare const Norway: ({ type, size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, hints, selectColor, hintTextColor, hintBackgroundColor, hintPadding, hintBorderRadius, }: NorwayProps) => React.JSX.Element | null;
interface NorwayProps {
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

export { Norway as default };
