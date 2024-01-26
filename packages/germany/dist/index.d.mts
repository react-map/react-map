import React from 'react';

declare const Germany: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GermanyProps) => React.JSX.Element;
interface GermanyProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Germany as default };
