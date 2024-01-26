import React from 'react';

declare const Tajikistan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TajikistanProps) => React.JSX.Element;
interface TajikistanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Tajikistan as default };
