import React from 'react';

declare const Georgia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GeorgiaProps) => React.JSX.Element;
interface GeorgiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Georgia as default };
