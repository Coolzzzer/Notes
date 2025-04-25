import React, { memo } from "react";
import LogoStyles from "./Logo.module.css";
type LogoProps = {
  image: string;
};

const logo: React.FC<LogoProps> = ({ image }) => {
  return <img src={image} alt="Logo" className={LogoStyles.img}/>;
};

export const Logo = memo(logo);
