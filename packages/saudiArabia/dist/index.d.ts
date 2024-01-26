import React from 'react';

declare const Saudiarabia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SaudiarabiaProps) => React.JSX.Element;
interface SaudiarabiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Saudiarabia as default };
