import React from 'react';

declare const Cambodia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CambodiaProps) => React.JSX.Element;
interface CambodiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Cambodia as default };
