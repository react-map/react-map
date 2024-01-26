import React from 'react';

declare const Belize: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BelizeProps) => React.JSX.Element;
interface BelizeProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Belize as default };
