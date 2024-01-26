import React from 'react';

declare const Switzerland: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SwitzerlandProps) => React.JSX.Element;
interface SwitzerlandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Switzerland as default };
