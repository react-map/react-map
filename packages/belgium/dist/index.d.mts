import React from 'react';

declare const Belgium: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BelgiumProps) => React.JSX.Element;
interface BelgiumProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Belgium as default };
