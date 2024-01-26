import React from 'react';

declare const Tokelau: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TokelauProps) => React.JSX.Element;
interface TokelauProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Tokelau as default };
