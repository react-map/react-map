import React from 'react';

declare const Mali: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: MaliProps) => React.JSX.Element;
interface MaliProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Mali as default };
