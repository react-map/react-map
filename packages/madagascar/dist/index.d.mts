import React from 'react';

declare const Madagascar: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MadagascarProps) => React.JSX.Element;
interface MadagascarProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Madagascar as default };
