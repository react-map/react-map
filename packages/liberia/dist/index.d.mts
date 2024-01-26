import React from 'react';

declare const Liberia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LiberiaProps) => React.JSX.Element;
interface LiberiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Liberia as default };
