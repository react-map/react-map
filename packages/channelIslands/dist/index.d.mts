import React from 'react';

declare const Channelislands: ({ size, mapColor, strokeColor, strokeWidth, hoverColor, onSelect, }: ChannelislandsProps) => React.JSX.Element;
interface ChannelislandsProps {
    size?: number;
    mapColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    hoverColor?: string;
    onSelect: (state: string) => void;
}

export { Channelislands as default };
