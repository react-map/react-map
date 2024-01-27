import React from 'react';

declare const Stkittsnevis: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: StkittsnevisProps) => React.JSX.Element;
interface StkittsnevisProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Stkittsnevis as default };
