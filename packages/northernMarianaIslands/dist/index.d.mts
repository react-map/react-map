import React from 'react';

declare const Northernmarianaislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NorthernmarianaislandsProps) => React.JSX.Element;
interface NorthernmarianaislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Northernmarianaislands as default };
