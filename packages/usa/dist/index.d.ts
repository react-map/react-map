import React from 'react';

declare const Usa: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UsaProps) => React.JSX.Element;
interface UsaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Usa as default };
