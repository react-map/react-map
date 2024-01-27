import React from 'react';

declare const Congodr: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CongodrProps) => React.JSX.Element;
interface CongodrProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Congodr as default };
