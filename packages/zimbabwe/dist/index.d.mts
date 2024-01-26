import React from 'react';

declare const Zimbabwe: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ZimbabweProps) => React.JSX.Element;
interface ZimbabweProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Zimbabwe as default };
