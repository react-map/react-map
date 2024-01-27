import React from 'react';

declare const Northkorea: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NorthkoreaProps) => React.JSX.Element;
interface NorthkoreaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Northkorea as default };
