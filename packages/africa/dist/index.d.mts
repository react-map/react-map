import React from 'react';

declare const Africa: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AfricaProps) => React.JSX.Element;
interface AfricaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Africa as default };
