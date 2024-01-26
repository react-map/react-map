import React from 'react';

declare const China: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ChinaProps) => React.JSX.Element;
interface ChinaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { China as default };
