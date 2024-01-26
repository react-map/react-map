import React from 'react';

declare const Grenada: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GrenadaProps) => React.JSX.Element;
interface GrenadaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Grenada as default };
