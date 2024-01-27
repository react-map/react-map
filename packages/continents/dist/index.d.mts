import React from 'react';

declare const Continents: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ContinentsProps) => React.JSX.Element;
interface ContinentsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Continents as default };
