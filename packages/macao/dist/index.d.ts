import React from 'react';

declare const Macao: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MacaoProps) => React.JSX.Element;
interface MacaoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Macao as default };
