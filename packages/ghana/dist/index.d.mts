import React from 'react';

declare const Ghana: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GhanaProps) => React.JSX.Element;
interface GhanaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Ghana as default };
