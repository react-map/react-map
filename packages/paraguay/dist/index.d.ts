import React from 'react';

declare const Paraguay: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ParaguayProps) => React.JSX.Element;
interface ParaguayProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Paraguay as default };
