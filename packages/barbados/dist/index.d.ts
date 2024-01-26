import React from 'react';

declare const Barbados: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BarbadosProps) => React.JSX.Element;
interface BarbadosProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Barbados as default };
