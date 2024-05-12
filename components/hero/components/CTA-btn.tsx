import React from "react";
import Link from "next/link";
import Image from "next/image";

const CTABtn: React.FC = () => {
  return (
    <Link href={"https://youtu.be/dQw4w9WgXcQ?si=5Yd1KvKITVdUq_ln"} className="flex justify-center items-center">
      <button type="button" className="text-white bg-gradient-to-r from-[#0bc4e2] via-cyan-500 to-[#2c8cc2] hover:bg-gradient-to-br font-semibold rounded-2xl px-4 py-2.5 text-center me-2 mb-2 flex justify-between items-center gap-2 text-2xl hover:shadow-heroBtn">
        <Image src="/forward-icon.png" width={50} height={50} alt="forward-icon" />
        Watch Now
        <div className="sr-only">Watch Now</div>
      </button>
    </Link>
  );
};

export default CTABtn;
