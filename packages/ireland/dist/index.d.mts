import React from 'react';

declare const Ireland: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: IrelandProps) => React.JSX.Element;
interface IrelandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Ireland as default };
