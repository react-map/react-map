import React from 'react';

declare const Slovenia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SloveniaProps) => React.JSX.Element;
interface SloveniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Slovenia as default };
