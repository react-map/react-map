import React from 'react';

declare const Stvincent: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: StvincentProps) => React.JSX.Element;
interface StvincentProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Stvincent as default };
