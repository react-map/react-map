import React from 'react';

declare const Togo: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TogoProps) => React.JSX.Element;
interface TogoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Togo as default };
