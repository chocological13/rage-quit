import React from "react";
import Link from "next/link";
import Image from "next/image";

const WatchBtn: React.FC = () => {
  return (
    <Link href={""} className="flex justify-center items-center">
      <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-2xl px-4 py-2.5 text-center me-2 mb-2 flex justify-between items-center gap-2 text-2xl">
        <Image src="/forward-icon.png" width={50} height={50} alt="forward-icon" />
        Watch Now
      </button>
    </Link>
  );
};

export default WatchBtn;
