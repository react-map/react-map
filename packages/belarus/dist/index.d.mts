import React from 'react';

declare const Belarus: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BelarusProps) => React.JSX.Element;
interface BelarusProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Belarus as default };
