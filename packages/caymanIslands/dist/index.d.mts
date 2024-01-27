import React from 'react';

declare const Caymanislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CaymanislandsProps) => React.JSX.Element;
interface CaymanislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Caymanislands as default };
