import React, { memo } from "react";

type LogoProps = {
  image: string;
};

const logo: React.FC<LogoProps> = ({ image }) => {
  return <img src={image} alt="Logo" />;
};

export const Logo = memo(logo);
