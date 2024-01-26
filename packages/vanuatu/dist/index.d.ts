import React from 'react';

declare const Vanuatu: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: VanuatuProps) => React.JSX.Element;
interface VanuatuProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Vanuatu as default };
