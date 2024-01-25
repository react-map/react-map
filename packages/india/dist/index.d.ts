import React from 'react';

declare const India: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: IndiaProps) => React.JSX.Element;
interface IndiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { India as default };
