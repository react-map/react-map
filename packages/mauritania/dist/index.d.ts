import React from 'react';

declare const Mauritania: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MauritaniaProps) => React.JSX.Element;
interface MauritaniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Mauritania as default };
