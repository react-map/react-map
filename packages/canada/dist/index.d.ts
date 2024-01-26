import React from 'react';

declare const Canada: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CanadaProps) => React.JSX.Element;
interface CanadaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Canada as default };
