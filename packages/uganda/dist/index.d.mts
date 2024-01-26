import React from 'react';

declare const Uganda: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UgandaProps) => React.JSX.Element;
interface UgandaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Uganda as default };
