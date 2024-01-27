import React from 'react';

declare const Papuanewguinea: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: PapuanewguineaProps) => React.JSX.Element;
interface PapuanewguineaProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Papuanewguinea as default };
