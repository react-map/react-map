import React from 'react';

declare const Gambia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GambiaProps) => React.JSX.Element;
interface GambiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Gambia as default };
