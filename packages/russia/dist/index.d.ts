import React from 'react';

declare const Russia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: RussiaProps) => React.JSX.Element;
interface RussiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Russia as default };
