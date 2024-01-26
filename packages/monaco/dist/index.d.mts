import React from 'react';

declare const Monaco: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MonacoProps) => React.JSX.Element;
interface MonacoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Monaco as default };
