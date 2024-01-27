import React from 'react';

declare const Trinidadandtobago: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TrinidadandtobagoProps) => React.JSX.Element;
interface TrinidadandtobagoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Trinidadandtobago as default };
