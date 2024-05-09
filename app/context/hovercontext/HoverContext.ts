"use client";
import { createContext } from "react";

interface HoverContextType {
  isHovered: boolean;
  setIsHovered: () => void;
  handleMouseEnter?: () => void;
}

const defaultValue = {
  isHovered: false,
  setIsHovered: () => {}
};

const HoverContext = createContext<HoverContextType>(defaultValue);

export default HoverContext;
