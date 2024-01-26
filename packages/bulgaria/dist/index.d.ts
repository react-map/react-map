import React from 'react';

declare const Bulgaria: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BulgariaProps) => React.JSX.Element;
interface BulgariaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Bulgaria as default };
