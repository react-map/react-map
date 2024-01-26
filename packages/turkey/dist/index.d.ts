import React from 'react';

declare const Turkey: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TurkeyProps) => React.JSX.Element;
interface TurkeyProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Turkey as default };
