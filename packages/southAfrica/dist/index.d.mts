import React from 'react';

declare const Southafrica: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SouthafricaProps) => React.JSX.Element;
interface SouthafricaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Southafrica as default };
