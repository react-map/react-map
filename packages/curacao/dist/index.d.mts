import React from 'react';

declare const Curacao: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CuracaoProps) => React.JSX.Element;
interface CuracaoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Curacao as default };
