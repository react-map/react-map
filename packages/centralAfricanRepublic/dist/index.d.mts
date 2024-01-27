import React from 'react';

declare const Centralafricanrepublic: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CentralafricanrepublicProps) => React.JSX.Element;
interface CentralafricanrepublicProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Centralafricanrepublic as default };
