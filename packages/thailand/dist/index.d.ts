import React from 'react';

declare const Thailand: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ThailandProps) => React.JSX.Element;
interface ThailandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Thailand as default };
