import React from 'react';

declare const Vaticancity: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: VaticancityProps) => React.JSX.Element;
interface VaticancityProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Vaticancity as default };
