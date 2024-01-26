import React from 'react';

declare const Honduras: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: HondurasProps) => React.JSX.Element;
interface HondurasProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Honduras as default };
