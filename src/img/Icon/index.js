import React from "react";
import Icons from "./Icons.svg"; // Path to your icons.svg

const Icon = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size} alt={name}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;