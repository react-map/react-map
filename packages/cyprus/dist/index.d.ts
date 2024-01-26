import React from 'react';

declare const Cyprus: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: CyprusProps) => React.JSX.Element;
interface CyprusProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Cyprus as default };
