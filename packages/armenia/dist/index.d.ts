import React from 'react';

declare const Armenia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ArmeniaProps) => React.JSX.Element;
interface ArmeniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Armenia as default };
