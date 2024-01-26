import React from 'react';

declare const Moldova: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MoldovaProps) => React.JSX.Element;
interface MoldovaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Moldova as default };
