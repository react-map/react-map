import React from 'react';

declare const Nicaragua: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NicaraguaProps) => React.JSX.Element;
interface NicaraguaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Nicaragua as default };
