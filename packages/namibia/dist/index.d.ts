import React from 'react';

declare const Namibia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NamibiaProps) => React.JSX.Element;
interface NamibiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Namibia as default };
