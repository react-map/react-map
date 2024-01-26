import React from 'react';

declare const Gibraltar: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GibraltarProps) => React.JSX.Element;
interface GibraltarProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Gibraltar as default };
