import React from 'react';

declare const Angola: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AngolaProps) => React.JSX.Element;
interface AngolaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Angola as default };
