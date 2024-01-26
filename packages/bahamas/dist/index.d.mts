import React from 'react';

declare const Bahamas: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BahamasProps) => React.JSX.Element;
interface BahamasProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Bahamas as default };
