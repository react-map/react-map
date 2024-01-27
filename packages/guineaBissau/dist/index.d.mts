import React from 'react';

declare const Guineabissau: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GuineabissauProps) => React.JSX.Element;
interface GuineabissauProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Guineabissau as default };
