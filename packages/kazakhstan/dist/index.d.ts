import React from 'react';

declare const Kazakhstan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: KazakhstanProps) => React.JSX.Element;
interface KazakhstanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Kazakhstan as default };
