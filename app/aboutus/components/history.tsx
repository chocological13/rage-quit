"use client";
import React from "react";
// import "@/app/globals.css";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  // const ref = useRef<HTMLLIElement>(null); // Reference for the section element
  // const { inView } = useInView({ threshold: 0.5 }); // Observe with 50% visibility

  // useEffect(() => {
  //   if (inView) {
  //     if (ref.current) {
  //       // Add a class or trigger animation logic when in view
  //       ref.current.classList.add("animated"); // Example class for animation
  //     }
  //   }
  // }, [inView]); --> doesnt work - fornow

  return (
    <section className="history bg-wheat">
      <h2 className="text-wine mb-3 py-4 pt-20 text-center text-4xl font-bold">
        Our Journey
      </h2>
      <ul className="grid gap-4">
        {/* map here */}
        <li className="timeline container mx-auto grid list-none gap-2 px-4 py-4 md:grid-cols-2 md:py-6">
          {/* {index % 2 === 0 ? (
            <>
              <div className="flex items-center md:justify-end">
                <p className="text-auburn mr-4 text-xl font-bold capitalize">
                  {year} - {title}
                </p>
              </div>
              <p className="align-middle capitalize leading-loose text-gray-700">
                {content}
              </p>
            </>
          ) : (
            <> */}
          <p className="align-middle capitalize leading-loose text-gray-700">
            {content}
          </p>
          <div className="flex items-center md:justify-end">
            <p className="text-auburn mr-4 text-xl font-bold capitalize">
              {year} - {title}
            </p>
          </div>
          {/* </>
          )} */}
        </li>
      </ul>
    </section>
  );
};

export default History;
