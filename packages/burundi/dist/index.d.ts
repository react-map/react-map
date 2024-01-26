import React from 'react';

declare const Burundi: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BurundiProps) => React.JSX.Element;
interface BurundiProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Burundi as default };
