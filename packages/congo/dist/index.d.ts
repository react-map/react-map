import React from 'react';

declare const Congo: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CongoProps) => React.JSX.Element;
interface CongoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Congo as default };
