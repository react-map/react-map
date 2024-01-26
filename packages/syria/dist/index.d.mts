import React from 'react';

declare const Syria: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SyriaProps) => React.JSX.Element;
interface SyriaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Syria as default };
