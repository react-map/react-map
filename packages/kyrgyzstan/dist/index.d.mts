import React from 'react';

declare const Kyrgyzstan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: KyrgyzstanProps) => React.JSX.Element;
interface KyrgyzstanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Kyrgyzstan as default };
