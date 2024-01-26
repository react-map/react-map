import React from 'react';

declare const Senegal: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SenegalProps) => React.JSX.Element;
interface SenegalProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Senegal as default };
