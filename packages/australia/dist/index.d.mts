import React from 'react';

declare const Australia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AustraliaProps) => React.JSX.Element;
interface AustraliaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Australia as default };
