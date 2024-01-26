import React from 'react';

declare const Iran: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: IranProps) => React.JSX.Element;
interface IranProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Iran as default };
