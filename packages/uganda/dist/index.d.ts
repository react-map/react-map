import React from 'react';

declare const Uganda: ({ type, size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, hints, selectColor, hintTextColor, hintBackgroundColor, hintPadding, hintBorderRadius, }: UgandaProps) => React.JSX.Element | null;
interface UgandaProps {
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
    hintBorderRadius?: string;
    onSelect?: (state: string, selectedStates?: string[]) => void;
}

export { Uganda as default };
