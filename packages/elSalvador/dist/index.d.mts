import React from 'react';

declare const Elsalvador: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ElsalvadorProps) => React.JSX.Element;
interface ElsalvadorProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Elsalvador as default };
