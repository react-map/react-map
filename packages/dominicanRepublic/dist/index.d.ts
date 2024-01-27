import React from 'react';

declare const Dominicanrepublic: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: DominicanrepublicProps) => React.JSX.Element;
interface DominicanrepublicProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Dominicanrepublic as default };
