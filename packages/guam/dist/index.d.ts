import React from 'react';

declare const Guam: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GuamProps) => React.JSX.Element;
interface GuamProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Guam as default };
