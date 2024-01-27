import React from 'react';

declare const Frenchguiana: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: FrenchguianaProps) => React.JSX.Element;
interface FrenchguianaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Frenchguiana as default };
