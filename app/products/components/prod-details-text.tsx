import { useMediaQuery } from "@mui/material";
import React from "react";

export interface ProdDetailsTextProps {
  title: string;
  desc: string;
  id: number;
}

const ProdDetailsText: React.FC<ProdDetailsTextProps> = ({
  title,
  desc,
  id,
}: {
  title: string;
  desc: string;
  id: number;
}) => {
  return (
    <div className="text-ragewhite">
      <div className={`flex flex-col ${id % 2 === 1 && `md:items-end`} py-10`}>
        <div
          className={`mb-14 flex flex-col md:my-10 ${id % 2 === 1 && `md:items-end`} gap-5`}
        >
          <p className="text-4xl font-semibold text-ragered">{title}</p>
          <p
            className={`desc ${id % 2 === 1 && `md:text-end`} text-justify leading-5 tracking-wider`}
          >
            {desc}
          </p>
        </div>
        <div className="flex justify-center md:block">
          <button
            type="button"
            className="rounded-md bg-ragewhite p-2 px-2 font-semibold text-bgblack underline underline-offset-8 hover:bg-ragered hover:text-ragewhite"
          >
            Play Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdDetailsText;
