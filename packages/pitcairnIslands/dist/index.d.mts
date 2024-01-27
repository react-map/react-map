import React from 'react';

declare const Pitcairnislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PitcairnislandsProps) => React.JSX.Element;
interface PitcairnislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Pitcairnislands as default };
