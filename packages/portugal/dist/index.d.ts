import React from 'react';

declare const Portugal: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PortugalProps) => React.JSX.Element;
interface PortugalProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Portugal as default };
