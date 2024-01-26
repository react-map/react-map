import React from 'react';

declare const Israel: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: IsraelProps) => React.JSX.Element;
interface IsraelProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Israel as default };
