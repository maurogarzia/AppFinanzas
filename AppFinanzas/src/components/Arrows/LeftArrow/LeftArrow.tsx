import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

interface ILeftArrow {
    

}

export default function LeftArrow({ size = 24, color = 'white' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Polygon points="15,6 9,12 15,18" fill={color} />
    </Svg>
  );
}
