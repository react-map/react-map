import React from 'react';

declare const Iceland: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: IcelandProps) => React.JSX.Element;
interface IcelandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Iceland as default };
