import React from 'react';

declare const Malta: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MaltaProps) => React.JSX.Element;
interface MaltaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Malta as default };
