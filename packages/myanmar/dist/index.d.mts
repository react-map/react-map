import React from 'react';

declare const Myanmar: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MyanmarProps) => React.JSX.Element;
interface MyanmarProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Myanmar as default };
