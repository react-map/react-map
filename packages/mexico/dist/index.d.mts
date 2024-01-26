import React from 'react';

declare const Mexico: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MexicoProps) => React.JSX.Element;
interface MexicoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Mexico as default };
