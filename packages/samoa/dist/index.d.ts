import React from 'react';

declare const Samoa: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: SamoaProps) => React.JSX.Element;
interface SamoaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Samoa as default };
