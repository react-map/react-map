import React from 'react';

declare const Guinea: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GuineaProps) => React.JSX.Element;
interface GuineaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Guinea as default };
