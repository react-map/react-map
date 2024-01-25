import React from 'react';

declare const Aruba: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ArubaProps) => React.JSX.Element;
interface ArubaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Aruba as default };
