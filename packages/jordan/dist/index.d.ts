import React from 'react';

declare const Jordan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: JordanProps) => React.JSX.Element;
interface JordanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Jordan as default };
