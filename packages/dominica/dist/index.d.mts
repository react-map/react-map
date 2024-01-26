import React from 'react';

declare const Dominica: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: DominicaProps) => React.JSX.Element;
interface DominicaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Dominica as default };
