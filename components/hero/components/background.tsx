import { Skeleton } from "@mui/material";
import React, { Suspense } from "react";

const VidBg: React.FC = () => {
  return (
    <div className="container overflow-hidden">
      <div className="bg-video bg-cover bg-center absolute inset-0 overflow-hidden mt-navheight box-border">
        <Suspense fallback={<Skeleton />}>
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="https://res.cloudinary.com/dymumlmnn/video/upload/v1715573421/who-we-are-video_fast_zf8qfz.webm" type="video/mp4" />
          </video>
        </Suspense>
      </div>
    </div>
  );
};

export default VidBg;
