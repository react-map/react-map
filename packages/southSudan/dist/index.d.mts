import React from 'react';

declare const Southsudan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SouthsudanProps) => React.JSX.Element;
interface SouthsudanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Southsudan as default };
