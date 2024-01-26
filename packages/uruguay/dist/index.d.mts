import React from 'react';

declare const Uruguay: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UruguayProps) => React.JSX.Element;
interface UruguayProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Uruguay as default };
