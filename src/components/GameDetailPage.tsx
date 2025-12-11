import { motion } from "motion/react";
import {
  Play,
  ArrowLeft,
  Github,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import pizzaDeliveryCover from "figma:asset/5f6ce5bf8069fdbe9e81ee18c07542db4c01dde5.png";
import wistarWagerCover from "figma:asset/5bc0328d10a672b0de34d9c6bcc7d6bfd05eb9a0.png";

interface GameDetailPageProps {
  gameId: string;
  onNavigate: (page: string) => void;
}

export function GameDetailPage({
  gameId,
  onNavigate,
}: GameDetailPageProps) {
  const [playingVideo, setPlayingVideo] = useState<
    number | null
  >(null);

  // Game data
  const games: Record<string, any> = {
    "pizza-delivery": {
      title: "Pizza Delivery - Zombies Eat Free",
      subtitle: "Game Jam FPS Experience",
      description:
        "A first person shooter game made by me and 5 classmates in a Game Jam. The player need to deliver pizza in a zombie apocalypse to earn enough money to leave the town. He need to kill the zombies, but the gun shoots money, your health bar is your money, everything is money. The theme of the game jam was Pay to Win.",
      role: "My Role",
      roleDescription:
        "I worked on gameplay mechanics, weapon systems, and UI implementation. I was responsible for creating the unique money-as-ammo system, integration of the new gun model to the system, addition of sound cues, and the enemy spawner. I made sure the enemies spawn correctly, were able to move around after spawning, and their increase in number would make the game harder with time but not impossible. ",
      features: [
        "Innovative money-based combat system",
        "Fast-paced zombie encounters",
        "Strategic resource management",
        "Co-developed with 5 teammates",
      ],
      technologies: [
        "Unreal Engine 5",
        "Blueprints",
        "C++",
        "Game Jam",
        "Diversion",
      ],
      media: [
        {
          type: "video",
          url: "https://drive.google.com/file/d/1QjOPfDqkMC_8BOqZlLAAyrN8tjTNeePq/preview",
          thumbnail: pizzaDeliveryCover,
          title: "Gameplay Demo",
        },
      ],
      links: [
        // { label: "Play Game", url: "", icon: "external" },
        // { label: "GitHub", url: "", icon: "github" },
      ],
    },
    "wistar-wager": {
      title: "Wistar Wager",
      subtitle: "Escape Facility Puzzle-Platformer",
      description:
        "An escape the facility game made using puzzles and platformers. It is a term long game project made by a 6 people team. I implemented blueprints, did level design, Audio Design, and built 2 levels in Unreal Engine 5.",
      role: "My Contributions",
      roleDescription:
        "As a key member of the development team, I was responsible for implementing blueprint logic, designing a complete level and building two, creating the audio landscape, and ensuring smooth gameplay flow through careful level design.",
      features: [
        "Complex puzzle mechanics",
        "Platforming challenges",
        "Custom level design",
        "Immersive audio design",
        "Blueprint implementation",
      ],
      technologies: [
        "Unreal Engine 5",
        "Blueprints",
        "Level Design",
        "Audio Design",
        "Reaper",
        "Perforce",
      ],
      media: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/CW8HNpuqJHg", // Walkthrough video
          thumbnail: wistarWagerCover,
          title: "Walkthrough",
        },
      ],
      links: [
        // { label: "Play Demo", url: "", icon: "external" },
        // { label: "GitHub", url: "", icon: "github" },
      ],
    },
  };

  const game = games[gameId];

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E8F5F5] via-[#F0FFFF] to-[#E0F7FA] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#7C4DFF] mb-4">
            Game Not Found
          </h2>
          <button
            onClick={() => {
              onNavigate("home");
              setTimeout(() => {
                const ue5Section =
                  document.getElementById("ue5");
                if (ue5Section) {
                  ue5Section.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }, 100);
            }}
            className="px-6 py-3 bg-gradient-to-r from-[#A0E7E5] to-[#7C4DFF] text-white rounded-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleBackToHome = () => {
    onNavigate("home");
    setTimeout(() => {
      const ue5Section = document.getElementById("ue5");
      if (ue5Section) {
        ue5Section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F5F5] via-[#F0FFFF] to-[#E0F7FA] py-20 px-6">
      <div className="max-w-6xl mx-auto pt-16">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBackToHome}
          className="flex items-center gap-2 text-[#7C4DFF] mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-[#7C4DFF] mb-2">{game.subtitle}</p>
          <h1 className="text-gray-800 mb-4">{game.title}</h1>
          <p className="text-gray-600 max-w-3xl">
            {game.description}
          </p>
        </motion.div>

        {/* Media Section */}
        {game.media && game.media.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 space-y-8"
          >
            {game.media.map((media: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#A0E7E5] to-[#7DD3C0] flex items-center justify-center group">
                  {media.url && playingVideo === index ? (
                    media.url.includes("youtube.com") ||
                    media.url.includes("vimeo.com") ||
                    media.url.includes("drive.google.com") ? (
                      <iframe
                        src={media.url}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={media.url}
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        autoPlay
                      />
                    )
                  ) : media.thumbnail ? (
                    <>
                      <img
                        src={media.thumbnail}
                        alt={media.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {media.url && (
                        <>
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            onClick={() =>
                              setPlayingVideo(index)
                            }
                            className="relative z-10 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
                          >
                            <Play className="w-8 h-8 text-[#7C4DFF] ml-1" />
                          </motion.div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      {media.url ? (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onClick={() => setPlayingVideo(index)}
                          className="relative z-10 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
                        >
                          <Play className="w-8 h-8 text-[#7C4DFF] ml-1" />
                        </motion.div>
                      ) : (
                        <div className="text-white/80 text-center p-6">
                          <p>
                            Add video URL to display{" "}
                            {media.title}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-gray-800">
                    {media.title}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Role Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="mb-4 text-gray-800">{game.role}</h3>
            <p className="text-gray-600 mb-6">
              {game.roleDescription}
            </p>

            <h4 className="mb-3 text-gray-800">Key Features</h4>
            <ul className="space-y-2">
              {game.features.map(
                (feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-[#7C4DFF] mt-1">
                      •
                    </span>
                    {feature}
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="mb-4 text-gray-800">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {game.technologies.map(
                (tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {game.links && game.links.length > 0 && (
              <>
                <h4 className="mb-3 text-gray-800">Links</h4>
                <div className="space-y-3">
                  {game.links.map(
                    (link: any, index: number) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#A0E7E5]/20 to-[#7DD3C0]/20 rounded-xl hover:from-[#A0E7E5]/30 hover:to-[#7DD3C0]/30 transition-colors"
                      >
                        {link.icon === "github" ? (
                          <Github className="w-5 h-5 text-[#2D8B8A]" />
                        ) : (
                          <ExternalLink className="w-5 h-5 text-[#2D8B8A]" />
                        )}
                        <span className="text-gray-700">
                          {link.label}
                        </span>
                      </motion.a>
                    ),
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}