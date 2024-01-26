import React from 'react';

declare const Costarica: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CostaricaProps) => React.JSX.Element;
interface CostaricaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Costarica as default };
