import React from 'react';

declare const Tibet: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TibetProps) => React.JSX.Element;
interface TibetProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Tibet as default };
