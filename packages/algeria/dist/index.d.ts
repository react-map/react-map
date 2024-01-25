import React from 'react';

declare const Algeria: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AlgeriaProps) => React.JSX.Element;
interface AlgeriaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Algeria as default };
