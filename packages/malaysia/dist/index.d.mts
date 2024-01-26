import React from 'react';

declare const Malaysia: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MalaysiaProps) => React.JSX.Element;
interface MalaysiaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Malaysia as default };
