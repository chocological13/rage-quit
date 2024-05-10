import React from "react";

const VidBg: React.FC = () => {
  return (
    <div className="bg-video bg-cover bg-center fixed inset-0 overflow-hidden mt-navheight">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="https://res.cloudinary.com/dymumlmnn/video/upload/v1715324973/who-we-are-video_cs1qkr.webm" type="video/mp4" />
      </video>
    </div>
  );
};

export default VidBg;
