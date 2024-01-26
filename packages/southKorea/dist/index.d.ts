import React from 'react';

declare const Southkorea: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SouthkoreaProps) => React.JSX.Element;
interface SouthkoreaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Southkorea as default };
