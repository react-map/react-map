import React from 'react';

declare const Ukraine: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UkraineProps) => React.JSX.Element;
interface UkraineProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Ukraine as default };
