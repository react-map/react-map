import React from 'react';

declare const Gabon: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GabonProps) => React.JSX.Element;
interface GabonProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Gabon as default };
