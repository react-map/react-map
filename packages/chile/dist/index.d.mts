import React from 'react';

declare const Chile: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ChileProps) => React.JSX.Element;
interface ChileProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Chile as default };
