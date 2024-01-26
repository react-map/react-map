import React from 'react';

declare const Maldives: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MaldivesProps) => React.JSX.Element;
interface MaldivesProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Maldives as default };
