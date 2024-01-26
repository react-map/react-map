import React from 'react';

declare const Luxembourg: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LuxembourgProps) => React.JSX.Element;
interface LuxembourgProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Luxembourg as default };
