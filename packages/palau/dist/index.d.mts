import React from 'react';

declare const Palau: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PalauProps) => React.JSX.Element;
interface PalauProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Palau as default };
