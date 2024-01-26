import React from 'react';

declare const Iraq: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: IraqProps) => React.JSX.Element;
interface IraqProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Iraq as default };
