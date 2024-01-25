import React from 'react';

declare const Azerbaijan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AzerbaijanProps) => React.JSX.Element;
interface AzerbaijanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Azerbaijan as default };
