import React from 'react';

declare const Kosovo: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: KosovoProps) => React.JSX.Element;
interface KosovoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Kosovo as default };
