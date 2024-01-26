import React from 'react';

declare const Tonga: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TongaProps) => React.JSX.Element;
interface TongaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Tonga as default };
