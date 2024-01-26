import React from 'react';

declare const Colombia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ColombiaProps) => React.JSX.Element;
interface ColombiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Colombia as default };
