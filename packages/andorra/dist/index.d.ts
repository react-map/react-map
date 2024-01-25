import React from 'react';

declare const Andorra: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AndorraProps) => React.JSX.Element;
interface AndorraProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Andorra as default };
