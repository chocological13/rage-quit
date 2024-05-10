import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full bg-video">
      <div className="bg-video bg-cover bg-center fixed inset-0 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="https://res.cloudinary.com/dymumlmnn/video/upload/v1715324973/who-we-are-video_cs1qkr.webm" type="video/mp4" />
        </video>
      </div>
      <div className="relative flex items-center text-center px-[80px] w-full">Hero</div>
    </div>
  );
};

export default Hero;
