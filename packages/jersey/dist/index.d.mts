import React from 'react';

declare const Jersey: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: JerseyProps) => React.JSX.Element;
interface JerseyProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Jersey as default };
