import React from 'react';

declare const Morocco: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MoroccoProps) => React.JSX.Element;
interface MoroccoProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Morocco as default };
