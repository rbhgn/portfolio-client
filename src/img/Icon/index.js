import React from "react";
import Icons from "./Icons.svg"; // Path to your icons.svg

const Icon = ({ name, color, width, height }) => (
  <svg className={`icon icon-${name}`} fill={color} width={width} height={height} alt={name}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;