import React from 'react';

declare const Lebanon: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: LebanonProps) => React.JSX.Element;
interface LebanonProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Lebanon as default };
