import React from 'react';

declare const Tuvalu: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TuvaluProps) => React.JSX.Element;
interface TuvaluProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Tuvalu as default };
