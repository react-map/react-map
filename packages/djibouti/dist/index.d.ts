import React from 'react';

declare const Djibouti: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: DjiboutiProps) => React.JSX.Element;
interface DjiboutiProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Djibouti as default };
