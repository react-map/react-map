import React from 'react';

declare const Nauru: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NauruProps) => React.JSX.Element;
interface NauruProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Nauru as default };
