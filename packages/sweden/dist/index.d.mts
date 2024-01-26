import React from 'react';

declare const Sweden: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SwedenProps) => React.JSX.Element;
interface SwedenProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Sweden as default };
