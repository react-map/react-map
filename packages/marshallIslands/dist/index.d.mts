import React from 'react';

declare const Marshallislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MarshallislandsProps) => React.JSX.Element;
interface MarshallislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Marshallislands as default };
