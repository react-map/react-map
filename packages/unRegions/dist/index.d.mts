import React from 'react';

declare const Unregions: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UnregionsProps) => React.JSX.Element;
interface UnregionsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Unregions as default };
