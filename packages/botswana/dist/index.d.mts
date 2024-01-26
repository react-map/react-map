import React from 'react';

declare const Botswana: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: BotswanaProps) => React.JSX.Element;
interface BotswanaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Botswana as default };
