import React from 'react';

declare const Fiji: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: FijiProps) => React.JSX.Element;
interface FijiProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Fiji as default };
