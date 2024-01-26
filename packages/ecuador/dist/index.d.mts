import React from 'react';

declare const Ecuador: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: EcuadorProps) => React.JSX.Element;
interface EcuadorProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Ecuador as default };
