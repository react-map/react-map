import React from 'react';

declare const Falklandislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: FalklandislandsProps) => React.JSX.Element;
interface FalklandislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Falklandislands as default };
