import React from 'react';

declare const Jamaica: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: JamaicaProps) => React.JSX.Element;
interface JamaicaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Jamaica as default };
