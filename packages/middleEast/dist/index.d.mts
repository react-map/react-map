import React from 'react';

declare const Middleeast: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MiddleeastProps) => React.JSX.Element;
interface MiddleeastProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Middleeast as default };
