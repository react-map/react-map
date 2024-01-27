import React from 'react';

declare const Stlucia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: StluciaProps) => React.JSX.Element;
interface StluciaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Stlucia as default };
