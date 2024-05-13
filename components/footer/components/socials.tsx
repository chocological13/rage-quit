"use client";
import React from "react";
import { useState } from "react";
import { Icon } from "@mui/material";

interface SocialsProps {
  icon: JSX.Element;
}

const Socials: React.FC<SocialsProps> = ({ icon }: { icon: JSX.Element }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Icon color={`${isHovered ? "warning" : "inherit"}`}>{icon}</Icon>
    </li>
  );
};

export default Socials;
