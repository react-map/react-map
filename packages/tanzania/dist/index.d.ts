import React from 'react';

declare const Tanzania: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TanzaniaProps) => React.JSX.Element;
interface TanzaniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Tanzania as default };
