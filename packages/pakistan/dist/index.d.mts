import React from 'react';

declare const Pakistan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PakistanProps) => React.JSX.Element;
interface PakistanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Pakistan as default };
