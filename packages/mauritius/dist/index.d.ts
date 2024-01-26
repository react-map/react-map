import React from 'react';

declare const Mauritius: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MauritiusProps) => React.JSX.Element;
interface MauritiusProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Mauritius as default };
