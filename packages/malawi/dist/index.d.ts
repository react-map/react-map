import React from 'react';

declare const Malawi: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MalawiProps) => React.JSX.Element;
interface MalawiProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Malawi as default };
