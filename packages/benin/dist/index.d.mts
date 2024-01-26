import React from 'react';

declare const Benin: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BeninProps) => React.JSX.Element;
interface BeninProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Benin as default };
