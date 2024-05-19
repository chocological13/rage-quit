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
      <div className={`flex flex-col ${id % 2 === 1 && `items-end`} py-10`}>
        <div
          className={`my-10 mb-14 flex flex-col ${id % 2 === 1 && `items-end`} gap-5`}
        >
          <p className="text-4xl font-semibold text-ragered">{title}</p>
          <p
            className={`desc ${id % 2 === 1 && `text-end`} leading-5 tracking-wider`}
          >
            {desc}
          </p>
        </div>
        <div>
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
