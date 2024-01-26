import React from 'react';

declare const Cuba: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CubaProps) => React.JSX.Element;
interface CubaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Cuba as default };
