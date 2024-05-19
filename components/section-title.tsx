import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
}: {
  title: string;
}) => {
  return (
    <div className="w-fit bg-ragered p-1 px-2 text-center uppercase tracking-wide text-white">
      <span>{title}</span>
    </div>
  );
};

export default SectionTitle;
