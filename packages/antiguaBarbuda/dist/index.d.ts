import React from 'react';

declare const AntiguaBarbuda: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AntiguabarbudaProps) => React.JSX.Element;
interface AntiguabarbudaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { AntiguaBarbuda as default };
