import React from 'react';

declare const Bermuda: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BermudaProps) => React.JSX.Element;
interface BermudaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Bermuda as default };
