import React from 'react';

declare const Uzbekistan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UzbekistanProps) => React.JSX.Element;
interface UzbekistanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Uzbekistan as default };
