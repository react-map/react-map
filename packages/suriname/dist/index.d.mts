import React from 'react';

declare const Suriname: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SurinameProps) => React.JSX.Element;
interface SurinameProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Suriname as default };
