import React from 'react';

declare const Singapore: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SingaporeProps) => React.JSX.Element;
interface SingaporeProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Singapore as default };
