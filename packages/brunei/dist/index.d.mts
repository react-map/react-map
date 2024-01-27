import React from 'react';

declare const Brunei: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BruneiProps) => React.JSX.Element;
interface BruneiProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Brunei as default };
