import React from 'react';

declare const Srilanka: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SrilankaProps) => React.JSX.Element;
interface SrilankaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Srilanka as default };
