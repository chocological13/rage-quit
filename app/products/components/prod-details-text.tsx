import React from "react";
import Modal from "@/components/modal";

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
  const button = (
    <button
      type="button"
      className="rounded-xl bg-ragewhite p-2 px-3 font-semibold text-bgblack underline underline-offset-8 hover:bg-ragered hover:text-ragewhite"
      aria-label="play link"
    >
      Play Now!
    </button>
  );
  return (
    <div className="text-ragewhite">
      <div className={`flex flex-col ${id % 2 === 1 && `md:items-end`} py-10`}>
        <div
          className={`mb-14 flex flex-col md:my-10 ${id % 2 === 1 && `md:items-end`} gap-5`}
        >
          <p className="text-4xl font-semibold text-ragered">{title}</p>
          <p
            className={`desc ${id % 2 === 1 && `md:text-end`} text-lg font-light leading-5 tracking-wider`}
          >
            {desc}
          </p>
        </div>
        <div className="flex justify-center md:block">
          <Modal
            el={button}
            title="Uh.. oh.. :("
            desc="We're sorry, this game is not available yet. Please check back soon!"
          />
        </div>
      </div>
    </div>
  );
};

export default ProdDetailsText;
