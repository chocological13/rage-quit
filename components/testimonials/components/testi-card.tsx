import { FormatQuote } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { Icon } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export interface TestiCardProps {
  name: string;
  content: string;
}

const TestiCard: React.FC<TestiCardProps> = ({
  content,
  name,
}: {
  content: string;
  name: string;
}) => {
  return (
    <div className="mx-auto my-0  flex max-w-[350px] flex-col  justify-between  rounded-[20px] py-12">
      <Icon color="warning">
        <FormatQuote />
      </Icon>
      <p className="my-10 text-[18px] font-normal leading-[32.4px] text-white">
        {content}
      </p>
      <div className="flex flex-row">
        <Icon color="warning">
          <Person />
        </Icon>
        <div className="ml-4 flex flex-col">
          <p className=" text-[20px] font-semibold leading-[32px] text-white">
            {name}
          </p>
          <p className=" text-[16px] font-normal leading-[24px] text-gray-500">
            Player since 200X
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
