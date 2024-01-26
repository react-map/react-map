import React from 'react';

declare const Ethiopia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: EthiopiaProps) => React.JSX.Element;
interface EthiopiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Ethiopia as default };
