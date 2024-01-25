import React from 'react';

declare const Argentina: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ArgentinaProps) => React.JSX.Element;
interface ArgentinaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Argentina as default };
