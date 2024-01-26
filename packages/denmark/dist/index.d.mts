import React from 'react';

declare const Denmark: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: DenmarkProps) => React.JSX.Element;
interface DenmarkProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Denmark as default };
