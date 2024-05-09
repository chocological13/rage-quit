"use client";
import { ReactNode } from "react";
import { useState } from "react";
import HoverContext from "./HoverContext";

interface HoverProviderProps {
  children: JSX.Element | ReactNode;
}

const HoverProvider: React.FC<HoverProviderProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered((prev) => !prev);
  };

  return <HoverContext.Provider value={{ isHovered, setIsHovered: handleMouseEnter }}>{children}</HoverContext.Provider>;
};

export default HoverProvider;
