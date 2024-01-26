import React from 'react';

declare const Greece: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GreeceProps) => React.JSX.Element;
interface GreeceProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Greece as default };
