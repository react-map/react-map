import React from 'react';

declare const Faroeislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: FaroeislandsProps) => React.JSX.Element;
interface FaroeislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Faroeislands as default };
