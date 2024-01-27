import React from 'react';

declare const Easttimor: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: EasttimorProps) => React.JSX.Element;
interface EasttimorProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Easttimor as default };
