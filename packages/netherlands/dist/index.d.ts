import React from 'react';

declare const Netherlands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NetherlandsProps) => React.JSX.Element;
interface NetherlandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Netherlands as default };
