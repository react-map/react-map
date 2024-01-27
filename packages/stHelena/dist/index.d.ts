import React from 'react';

declare const Sthelena: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SthelenaProps) => React.JSX.Element;
interface SthelenaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Sthelena as default };
