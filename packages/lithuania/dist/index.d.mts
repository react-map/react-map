import React from 'react';

declare const Lithuania: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LithuaniaProps) => React.JSX.Element;
interface LithuaniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Lithuania as default };
