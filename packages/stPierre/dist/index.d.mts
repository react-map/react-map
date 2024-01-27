import React from 'react';

declare const Stpierre: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: StpierreProps) => React.JSX.Element;
interface StpierreProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Stpierre as default };
