import React from 'react';

declare const Austria: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AustriaProps) => React.JSX.Element;
interface AustriaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Austria as default };
