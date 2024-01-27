import React from 'react';

declare const Sanmarino: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SanmarinoProps) => React.JSX.Element;
interface SanmarinoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Sanmarino as default };
