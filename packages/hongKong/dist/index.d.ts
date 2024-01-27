import React from 'react';

declare const Hongkong: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: HongkongProps) => React.JSX.Element;
interface HongkongProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Hongkong as default };
