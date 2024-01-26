import React from 'react';

declare const Latvia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LatviaProps) => React.JSX.Element;
interface LatviaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Latvia as default };
