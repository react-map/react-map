import React from 'react';

declare const Macedonia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MacedoniaProps) => React.JSX.Element;
interface MacedoniaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Macedonia as default };
