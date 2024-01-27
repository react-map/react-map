import React from 'react';

declare const Unitedkingdom: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UnitedkingdomProps) => React.JSX.Element;
interface UnitedkingdomProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Unitedkingdom as default };
