import React from 'react';

declare const Anguilla: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AnguillaProps) => React.JSX.Element;
interface AnguillaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Anguilla as default };
