import React from "react";
import TeamCard from "./team-card";
import TeamsCard from "@/app/aboutus/components/teams-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TeamDisplay: React.FC = () => {
  const DATA = [
    {
      img: "/det/yuumi.webp",
      name: "Yuumi",
      role: "CattoEO & Co-Founder",
      content:
        "Yuumi brings a unique blend of curiosity and wisdom to the leadership role. With her magical book, Book, by her side, she navigates the challenges of the gaming industry with agility and grace.",
    },
    {
      img: "/det/sera.webp",
      name: "Seraphine",
      role: "Creative Dreamer",
      content:
        "Seraphine, a pop star and visionary, infuses her love for music and storytelling into every project. Her ability to harmonize creative ideas makes her an invaluable asset to the team.",
    },
    {
      img: "/det/lux.webp",
      name: "Lux",
      role: "Artlight Director",
      content:
        "With her radiant personality and artistic flair, Lux brings light and beauty to our game worlds. Her keen eye for detail ensures that every visual element is stunning and immersive.",
    },
    {
      img: "/det/ryze.webp",
      name: "Ryze",
      role: "Narrative Designer",
      content:
        "Ryze, a seasoned mage, uses his extensive knowledge of lore and magic to craft deep and compelling narratives. His storytelling skills create rich, immersive worlds for players to explore.",
    },
    {
      img: "/det/heim.webp",
      name: "Heimerdinger",
      role: "Lead Mad Developer",
      content:
        "A brilliant inventor and scientist, Heimerdinger’s technical prowess ensures that our games are at the cutting edge of technology. His innovative spirit drives our development process.",
    },
    {
      img: "/det/viktor.webp",
      name: "Viktor",
      role: "Chief AndroTech Officer",
      content:
        "Viktor’s vision for the future of technology drives our technical innovations. His expertise in robotics and artificial intelligence keeps our games at the forefront of technological advancement.",
    },
    {
      img: "/det/ahri.webp",
      name: "Ahri",
      role: "Player Experience Lead",
      content:
        "Ahri’s charm and insight into player behavior make her the perfect fit for leading the Player Experience team. Her focus is on creating engaging and rewarding experiences that resonate with our community.",
    },
    {
      img: "/det/ivern.webp",
      name: "Ivern",
      role: "MarketTREE Manager",
      content:
        "Known as the Green Father, Ivern brings his nurturing spirit to the marketing team. His deep connection with nature translates into campaigns that are both organic and impactful.",
    },
    {
      img: "/det/janna.webp",
      name: "Janna",
      role: "Community Manager",
      content:
        "As the wind spirit, Janna brings a refreshing breeze to our community interactions. Her ability to listen and respond to player feedback ensures a harmonious relationship with our gaming community.",
    },
    {
      img: "/det/sona.webp",
      name: "Sona",
      role: "Sound Designer",
      content:
        "A musical savant, Sona creates the soundscapes and melodies that define our games. Her compositions add emotional depth and resonance, enhancing the overall player experience.",
    },
  ];
  return (
    <>
      <p className="text-center text-5xl font-semibold text-black">
        Meet The <span className="text-ragered">Legends</span>
      </p>

      <div className="mt-10 px-2 md:px-10">
        <div className="team-display mx-auto flex w-full overflow-hidden">
          <Carousel className="mx-12 flex flex-row md:mx-14">
            <CarouselContent>
              {DATA.map((team, index) => (
                <CarouselItem className="grid place-items-center md:w-1/3 md:flex-shrink-0 md:basis-1/5 md:py-12">
                  <TeamCard key={index} {...team} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default TeamDisplay;
