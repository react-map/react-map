import React from 'react';

declare const Peru: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PeruProps) => React.JSX.Element;
interface PeruProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Peru as default };
