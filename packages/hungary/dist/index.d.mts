import React from 'react';

declare const Hungary: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: HungaryProps) => React.JSX.Element;
interface HungaryProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Hungary as default };
