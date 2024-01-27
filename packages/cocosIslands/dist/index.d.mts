import React from 'react';

declare const Cocosislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CocosislandsProps) => React.JSX.Element;
interface CocosislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Cocosislands as default };
