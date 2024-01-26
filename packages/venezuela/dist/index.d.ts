import React from 'react';

declare const Venezuela: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: VenezuelaProps) => React.JSX.Element;
interface VenezuelaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Venezuela as default };
