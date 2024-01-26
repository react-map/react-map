import React from 'react';

declare const Brazil: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BrazilProps) => React.JSX.Element;
interface BrazilProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Brazil as default };
