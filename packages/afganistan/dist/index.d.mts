import React from 'react';

declare const Afganistan: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: AfganistanProps) => React.JSX.Element;
interface AfganistanProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Afganistan as default };
