import React from 'react';

declare const Mongolia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MongoliaProps) => React.JSX.Element;
interface MongoliaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Mongolia as default };
