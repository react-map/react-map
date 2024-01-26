import React from 'react';

declare const Laos: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LaosProps) => React.JSX.Element;
interface LaosProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Laos as default };
