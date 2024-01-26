import React from 'react';

declare const Greenland: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GreenlandProps) => React.JSX.Element;
interface GreenlandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Greenland as default };
