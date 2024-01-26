import React from 'react';

declare const Egypt: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: EgyptProps) => React.JSX.Element;
interface EgyptProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Egypt as default };
