import React from 'react';

declare const Comoros: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ComorosProps) => React.JSX.Element;
interface ComorosProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Comoros as default };
