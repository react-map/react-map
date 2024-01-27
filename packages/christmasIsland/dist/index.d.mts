import React from 'react';

declare const Christmasisland: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ChristmasislandProps) => React.JSX.Element;
interface ChristmasislandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Christmasisland as default };
