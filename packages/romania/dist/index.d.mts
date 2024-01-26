import React from 'react';

declare const Romania: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: RomaniaProps) => React.JSX.Element;
interface RomaniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Romania as default };
