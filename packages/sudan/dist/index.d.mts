import React from 'react';

declare const Sudan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SudanProps) => React.JSX.Element;
interface SudanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Sudan as default };
