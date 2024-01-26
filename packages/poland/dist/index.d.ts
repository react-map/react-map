import React from 'react';

declare const Poland: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PolandProps) => React.JSX.Element;
interface PolandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Poland as default };
