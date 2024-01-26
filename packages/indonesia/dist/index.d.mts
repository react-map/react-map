import React from 'react';

declare const Indonesia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: IndonesiaProps) => React.JSX.Element;
interface IndonesiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Indonesia as default };
