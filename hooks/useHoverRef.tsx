// import { useRef } from "react";

// interface HoverState {
//   isHovered: boolean;
//   handleMouseEnter: () => void;
//   handleMouseLeave: () => void;
// }

// function useHoverRef(): HoverState {
//   const isHoveredRef = useRef(false);

//   const handleMouseEnter = () => {
//     isHoveredRef.current = true;
//     console.log("isHoveredRef: " + isHoveredRef.current);
//   };

//   const handleMouseLeave = () => {
//     isHoveredRef.current = false;
//   };

//   return { isHovered: isHoveredRef.current, handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave };
// }

// export default useHoverRef;
