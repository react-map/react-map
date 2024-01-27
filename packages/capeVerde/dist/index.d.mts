import React from 'react';

declare const Capeverde: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CapeverdeProps) => React.JSX.Element;
interface CapeverdeProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Capeverde as default };
