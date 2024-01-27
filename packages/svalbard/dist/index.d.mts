import React from 'react';

declare const Svalbard: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SvalbardProps) => React.JSX.Element;
interface SvalbardProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Svalbard as default };
