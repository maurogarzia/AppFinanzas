import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

export default function BottomArrow({ size = 24, color = 'white' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Polygon points="6,9 12,15 18,9" fill={color} />
    </Svg>
  );
}
