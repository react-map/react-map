import React from 'react';

declare const Eritrea: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: EritreaProps) => React.JSX.Element;
interface EritreaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Eritrea as default };
