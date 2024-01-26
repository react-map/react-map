import React from 'react';

declare const France: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: FranceProps) => React.JSX.Element;
interface FranceProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { France as default };
