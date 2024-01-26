import React from 'react';

declare const Spain: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SpainProps) => React.JSX.Element;
interface SpainProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Spain as default };
