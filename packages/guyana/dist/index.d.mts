import React from 'react';

declare const Guyana: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GuyanaProps) => React.JSX.Element;
interface GuyanaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Guyana as default };
