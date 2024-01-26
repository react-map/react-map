import React from 'react';

declare const Norway: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NorwayProps) => React.JSX.Element;
interface NorwayProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Norway as default };
