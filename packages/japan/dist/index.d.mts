import React from 'react';

declare const Japan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: JapanProps) => React.JSX.Element;
interface JapanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Japan as default };
