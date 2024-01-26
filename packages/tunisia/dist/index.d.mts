import React from 'react';

declare const Tunisia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: TunisiaProps) => React.JSX.Element;
interface TunisiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Tunisia as default };
