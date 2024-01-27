import React from 'react';

declare const Sierraleone: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SierraleoneProps) => React.JSX.Element;
interface SierraleoneProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Sierraleone as default };
