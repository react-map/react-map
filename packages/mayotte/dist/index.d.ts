import React from 'react';

declare const Mayotte: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MayotteProps) => React.JSX.Element;
interface MayotteProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Mayotte as default };
