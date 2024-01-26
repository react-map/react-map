import React from 'react';

declare const Guatemala: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: GuatemalaProps) => React.JSX.Element;
interface GuatemalaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Guatemala as default };
