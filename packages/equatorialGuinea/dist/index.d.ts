import React from 'react';

declare const Equatorialguinea: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: EquatorialguineaProps) => React.JSX.Element;
interface EquatorialguineaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Equatorialguinea as default };
