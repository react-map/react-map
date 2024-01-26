import React from 'react';

declare const Panama: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PanamaProps) => React.JSX.Element;
interface PanamaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Panama as default };
