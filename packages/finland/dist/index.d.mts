import React from 'react';

declare const Finland: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: FinlandProps) => React.JSX.Element;
interface FinlandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Finland as default };
