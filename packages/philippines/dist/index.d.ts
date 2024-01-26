import React from 'react';

declare const Philippines: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PhilippinesProps) => React.JSX.Element;
interface PhilippinesProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Philippines as default };
