import React from 'react';

declare const Puertorico: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PuertoricoProps) => React.JSX.Element;
interface PuertoricoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Puertorico as default };
