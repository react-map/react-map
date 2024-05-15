import React from 'react';

declare const Argentina: ({ type, size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, hints, selectColor, hintTextColor, hintBackgroundColor, hintPadding, hintBorderRadius, }: ArgentinaProps) => React.JSX.Element | null;
interface ArgentinaProps {
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

export { Argentina as default };
