import React from 'react';

declare const Czechrepublic: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CzechrepublicProps) => React.JSX.Element;
interface CzechrepublicProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Czechrepublic as default };
