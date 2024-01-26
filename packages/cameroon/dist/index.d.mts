import React from 'react';

declare const Cameroon: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CameroonProps) => React.JSX.Element;
interface CameroonProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Cameroon as default };
