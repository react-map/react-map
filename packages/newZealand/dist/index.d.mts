import React from 'react';

declare const Newzealand: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: NewzealandProps) => React.JSX.Element;
interface NewzealandProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Newzealand as default };
