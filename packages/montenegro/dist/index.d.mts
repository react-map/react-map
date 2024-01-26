import React from 'react';

declare const Montenegro: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MontenegroProps) => React.JSX.Element;
interface MontenegroProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Montenegro as default };
