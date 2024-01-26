import React from 'react';

declare const Guadeloupe: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GuadeloupeProps) => React.JSX.Element;
interface GuadeloupeProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Guadeloupe as default };
