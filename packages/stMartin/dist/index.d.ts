import React from 'react';

declare const Stmartin: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: StmartinProps) => React.JSX.Element;
interface StmartinProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Stmartin as default };
