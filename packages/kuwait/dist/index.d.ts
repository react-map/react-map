import React from 'react';

declare const Kuwait: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: KuwaitProps) => React.JSX.Element;
interface KuwaitProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Kuwait as default };
