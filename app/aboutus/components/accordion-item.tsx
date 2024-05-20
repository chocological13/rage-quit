import React from "react";
import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemProps {
  value: string;
  title: string;
  content: string;
}

const AccordionItemLocal: React.FC<AccordionItemProps> = ({
  value,
  title,
  content,
}: {
  value: string;
  title: string;
  content: string;
}) => {
  return (
    <AccordionItem
      value={value}
      className="rounded-xl mix-blend-lighten hover:bg-slate-200 hover:bg-opacity-20"
    >
      <AccordionTrigger className=" min-h-24 text-left text-2xl md:min-h-40">
        {title}
      </AccordionTrigger>
      <AccordionContent className=" bg-slate-600 leading-7 -tracking-wide mix-blend-lighten md:text-lg">
        <p>{content}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionItemLocal;
