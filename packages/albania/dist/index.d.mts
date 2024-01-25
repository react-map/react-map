import React from 'react';

declare const Albania: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AlbaniaProps) => React.JSX.Element;
interface AlbaniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Albania as default };
