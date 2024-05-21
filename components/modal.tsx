import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { ReactNode } from "react";

interface ModalProps {
  el: ReactNode;
  title: string;
  desc: string;
}

const Modal: React.FC<ModalProps> = ({
  el,
  title,
  desc,
}: {
  el: ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{el}</AlertDialogTrigger>
      <AlertDialogContent aria-label="a pop up" className="bg-bgblack">
        <AlertDialogHeader>
          <AlertDialogTitle aria-label="title" className="text-xl text-ragered">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription
            aria-label="description"
            className="text-ragewhite "
          >
            {desc}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-ragered">
            Explore the other side of the forge!
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
