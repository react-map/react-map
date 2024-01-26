import React from 'react';

declare const Yemen: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: YemenProps) => React.JSX.Element;
interface YemenProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Yemen as default };
