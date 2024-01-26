import React from 'react';

declare const Liechtenstein: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LiechtensteinProps) => React.JSX.Element;
interface LiechtensteinProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Liechtenstein as default };
