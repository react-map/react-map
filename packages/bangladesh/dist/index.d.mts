import React from 'react';

declare const Bangladesh: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BangladeshProps) => React.JSX.Element;
interface BangladeshProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Bangladesh as default };
