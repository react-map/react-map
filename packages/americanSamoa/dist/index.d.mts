import React from 'react';

declare const AmericanSamoa: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AmericansamoaProps) => React.JSX.Element;
interface AmericansamoaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { AmericanSamoa as default };
