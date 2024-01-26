import React from 'react';

declare const Micronesia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MicronesiaProps) => React.JSX.Element;
interface MicronesiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Micronesia as default };
