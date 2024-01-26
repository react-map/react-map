import React from 'react';

declare const Croatia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CroatiaProps) => React.JSX.Element;
interface CroatiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Croatia as default };
