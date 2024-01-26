import React from 'react';

declare const Vietnam: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: VietnamProps) => React.JSX.Element;
interface VietnamProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Vietnam as default };
