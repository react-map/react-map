import React from 'react';

declare const Nepal: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NepalProps) => React.JSX.Element;
interface NepalProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Nepal as default };
