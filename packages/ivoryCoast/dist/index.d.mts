import React from 'react';

declare const Ivorycoast: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: IvorycoastProps) => React.JSX.Element;
interface IvorycoastProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Ivorycoast as default };
