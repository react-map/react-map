import React from 'react';

declare const Burkinafaso: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BurkinafasoProps) => React.JSX.Element;
interface BurkinafasoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Burkinafaso as default };
