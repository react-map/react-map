import React from 'react';

declare const Niue: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NiueProps) => React.JSX.Element;
interface NiueProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Niue as default };
