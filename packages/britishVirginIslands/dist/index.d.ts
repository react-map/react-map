import React from 'react';

declare const Britishvirginislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BritishvirginislandsProps) => React.JSX.Element;
interface BritishvirginislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Britishvirginislands as default };
