import React from 'react';

declare const Seychelles: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SeychellesProps) => React.JSX.Element;
interface SeychellesProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Seychelles as default };
