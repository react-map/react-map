import React from 'react';

declare const Solomonislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SolomonislandsProps) => React.JSX.Element;
interface SolomonislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Solomonislands as default };
