import React from 'react';

declare const Oceania: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: OceaniaProps) => React.JSX.Element;
interface OceaniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Oceania as default };
