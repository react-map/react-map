import React from 'react';

declare const Estonia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: EstoniaProps) => React.JSX.Element;
interface EstoniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Estonia as default };
