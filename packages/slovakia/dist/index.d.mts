import React from 'react';

declare const Slovakia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SlovakiaProps) => React.JSX.Element;
interface SlovakiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Slovakia as default };
