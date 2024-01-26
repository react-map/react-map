import React from 'react';

declare const Haiti: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: HaitiProps) => React.JSX.Element;
interface HaitiProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Haiti as default };
