import React from 'react';

declare const Oman: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: OmanProps) => React.JSX.Element;
interface OmanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Oman as default };
