import { FormatQuote } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { Icon } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export interface TestiCardProps {
  name: string;
  content: string;
}

const TestiCard: React.FC<TestiCardProps> = ({ content, name }: { content: string; name: string }) => {
  return (
    <div className="flex justify-between  flex-col py-12 rounded-[20px]  max-w-[350px]  mx-auto my-0">
      <Icon color="warning">
        <FormatQuote />
      </Icon>
      <p className="font-normal text-[18px] leading-[32.4px] text-white my-10">{content}</p>
      <div className="flex flex-row">
        <Icon color="warning">
          <Person />
        </Icon>
        <div className="flex flex-col ml-4">
          <h4 className=" font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
          <p className=" font-normal text-[16px] leading-[24px] text-gray-500">Player since 200X</p>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
