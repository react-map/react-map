import React from 'react';

declare const Southamerica: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SouthamericaProps) => React.JSX.Element;
interface SouthamericaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Southamerica as default };
