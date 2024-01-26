import React from 'react';

declare const Italy: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ItalyProps) => React.JSX.Element;
interface ItalyProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Italy as default };
