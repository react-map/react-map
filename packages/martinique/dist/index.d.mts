import React from 'react';

declare const Martinique: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MartiniqueProps) => React.JSX.Element;
interface MartiniqueProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Martinique as default };
