import React from 'react';

declare const Qatar: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: QatarProps) => React.JSX.Element;
interface QatarProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Qatar as default };
