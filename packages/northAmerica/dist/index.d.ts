import React from 'react';

declare const Northamerica: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NorthamericaProps) => React.JSX.Element;
interface NorthamericaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Northamerica as default };
