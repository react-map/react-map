import React from 'react';

declare const Taiwan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TaiwanProps) => React.JSX.Element;
interface TaiwanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Taiwan as default };
