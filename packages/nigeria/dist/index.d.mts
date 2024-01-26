import React from 'react';

declare const Nigeria: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NigeriaProps) => React.JSX.Element;
interface NigeriaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Nigeria as default };
