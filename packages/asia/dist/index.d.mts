import React from 'react';

declare const Asia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AsiaProps) => React.JSX.Element;
interface AsiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Asia as default };
