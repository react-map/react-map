import React from 'react';

declare const Zambia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ZambiaProps) => React.JSX.Element;
interface ZambiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Zambia as default };
