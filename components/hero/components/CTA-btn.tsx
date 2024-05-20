import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface CTABtnProps {
  title: string;
  link: string;
}

const CTABtn: React.FC<CTABtnProps> = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => {
  return (
    <Link href={link} className="flex items-center justify-center">
      <button
        type="button"
        className="hover:shadow-heroBtn mb-2 me-2 flex items-center justify-between gap-2 rounded-2xl bg-gradient-to-r from-[#0bc4e2] via-cyan-500 to-[#2c8cc2] px-4 py-2.5 text-center text-3xl font-semibold text-white hover:bg-gradient-to-br"
      >
        <Image
          src="/forward-icon.png"
          width={50}
          height={50}
          alt="forward-icon"
        />
        {title}
        <div className="sr-only">title</div>
      </button>
    </Link>
  );
};

export default CTABtn;
