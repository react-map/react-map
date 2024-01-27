import React from 'react';

declare const Usvirginislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UsvirginislandsProps) => React.JSX.Element;
interface UsvirginislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Usvirginislands as default };
