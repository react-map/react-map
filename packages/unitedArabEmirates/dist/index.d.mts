import React from 'react';

declare const Unitedarabemirates: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: UnitedarabemiratesProps) => React.JSX.Element;
interface UnitedarabemiratesProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Unitedarabemirates as default };
