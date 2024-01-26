import React from 'react';

declare const World: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: WorldProps) => React.JSX.Element;
interface WorldProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { World as default };
