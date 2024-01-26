import React from 'react';

declare const Chad: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ChadProps) => React.JSX.Element;
interface ChadProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Chad as default };
