"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface TeamCardProps {
  img: string;
  name: string;
  role: string;
  content: string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TeamCard: React.FC<TeamCardProps> = ({
  img,
  name,
  role,
  content,
}: {
  img: string;
  name: string;
  role: string;
  content: string;
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia component="img" height="100" image={img} alt={name} />
      <div className="w-full bg-bgblack p-2 text-white">
        <div className="team-name my-2 text-2xl font-semibold">{name}</div>
        <div className="team-role text-base">{role}</div>
        <div className="flex flex-row">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className=" text-white" />
          </ExpandMore>
        </div>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="bg-bgblack p-3 text-xs text-white">
          <p>{content}</p>
        </div>
      </Collapse>
    </Card>
  );
};

export default TeamCard;
