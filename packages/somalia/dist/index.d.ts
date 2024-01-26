import React from 'react';

declare const Somalia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SomaliaProps) => React.JSX.Element;
interface SomaliaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Somalia as default };
