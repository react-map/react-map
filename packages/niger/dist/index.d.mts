import React from 'react';

declare const Niger: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NigerProps) => React.JSX.Element;
interface NigerProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Niger as default };
