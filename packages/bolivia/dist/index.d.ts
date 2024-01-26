import React from 'react';

declare const Bolivia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BoliviaProps) => React.JSX.Element;
interface BoliviaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Bolivia as default };
