import React from 'react';

declare const Kiribati: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: KiribatiProps) => React.JSX.Element;
interface KiribatiProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Kiribati as default };
