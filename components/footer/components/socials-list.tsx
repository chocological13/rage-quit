import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Socials from "./socials";

const SocialsList: React.FC = () => {
  const icons = [
    <FacebookIcon />,
    <XIcon />,
    <LinkedInIcon />,
    <YouTubeIcon />,
  ];

  return (
    <ul id="socials-list" className="flex flex-row gap-3">
      {icons.map((icon, index) => (
        <Socials key={index} icon={icon} />
      ))}
    </ul>
  );
};

export default SocialsList;
