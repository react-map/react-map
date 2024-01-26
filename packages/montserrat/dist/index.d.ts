import React from 'react';

declare const Montserrat: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MontserratProps) => React.JSX.Element;
interface MontserratProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Montserrat as default };
