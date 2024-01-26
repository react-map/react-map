import React from 'react';

declare const Serbia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SerbiaProps) => React.JSX.Element;
interface SerbiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Serbia as default };
