import React from 'react';

declare const Bhutan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BhutanProps) => React.JSX.Element;
interface BhutanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Bhutan as default };
