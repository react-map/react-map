import React from 'react';

declare const Kenya: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: KenyaProps) => React.JSX.Element;
interface KenyaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Kenya as default };
