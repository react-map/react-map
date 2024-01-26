import React from 'react';

declare const Rwanda: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: RwandaProps) => React.JSX.Element;
interface RwandaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Rwanda as default };
