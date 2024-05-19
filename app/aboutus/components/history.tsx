import React from "react";

interface HistoryProps {
  year: number;
  title: string;
  content: string;
}

const History: React.FC<HistoryProps> = ({
  year,
  title,
  content,
}: {
  year: number;
  title: string;
  content: string;
}) => {
  return (
    <section className="history bg-titlegray">
      <h2 className="mb-3 py-4 pt-20 text-center text-4xl font-bold text-wine">
        Our Journey
      </h2>
      <ul className="grid gap-4">
        {/* map here */}
        <li className="timeline container mx-auto grid list-none gap-2 px-4 py-4 md:grid-cols-2 md:py-6">
          <div className="flex items-center md:justify-end">
            <p className="mr-4 text-xl font-bold capitalize text-auburn">
              {year} - {title}
            </p>
          </div>
          <p className="align-middle capitalize leading-loose text-gray-700">
            {content}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default History;
