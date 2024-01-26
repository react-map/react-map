import React from 'react';

declare const Turkmenistan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TurkmenistanProps) => React.JSX.Element;
interface TurkmenistanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Turkmenistan as default };
