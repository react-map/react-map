import React from 'react';

declare const Palestine: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PalestineProps) => React.JSX.Element;
interface PalestineProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Palestine as default };
