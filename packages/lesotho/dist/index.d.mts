import React from 'react';

declare const Lesotho: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LesothoProps) => React.JSX.Element;
interface LesothoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Lesotho as default };
