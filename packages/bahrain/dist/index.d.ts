import React from 'react';

declare const Bahrain: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BahrainProps) => React.JSX.Element;
interface BahrainProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Bahrain as default };
