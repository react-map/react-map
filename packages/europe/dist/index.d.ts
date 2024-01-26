import React from 'react';

declare const Europe: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: EuropeProps) => React.JSX.Element;
interface EuropeProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Europe as default };
