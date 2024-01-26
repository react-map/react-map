import React from 'react';

declare const BosniaHerzegovina: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BosniaHerzegovinaProps) => React.JSX.Element;
interface BosniaHerzegovinaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { BosniaHerzegovina as default };
