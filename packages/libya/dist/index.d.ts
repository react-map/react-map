import React from 'react';

declare const Libya: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LibyaProps) => React.JSX.Element;
interface LibyaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Libya as default };
