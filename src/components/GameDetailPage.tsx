import { motion } from "motion/react";
import {
  Play,
  ArrowLeft,
  Github,
  ExternalLink,
  Gamepad2,
} from "lucide-react";
import { useState } from "react";

const pizzaDeliveryCover =
  "https://drive.google.com/thumbnail?id=1tsLykXWahGshQehcEniebXquvAoyeqIN&sz=w2000";
const wistarWagerCover =
  "https://drive.google.com/thumbnail?id=1b17wpo4-2cIDmwlUlY5jhVKvSo6orJ6y&sz=w2000";
const godotCover =
  "https://images.unsplash.com/photo-1745223676002-b881b2a19089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBkZXZlbG9wbWVudCUyMHNjcmVlbiUyMGNvZGV8ZW58MXx8fHwxNzY5NTgyMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const unityCover =
  "https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njk1ODIwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

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
    "godot-platformer": {
      title: "B0T.NET",
      subtitle: "Hacker-themed Clicker / Tower Defense",
      description: `B0T.NET is a hacker-themed clicker / tower defense game where you fight off a virus continuously diving deeper into your file system. Click on the viruses to gain RAM, and use it to buy towers!

How to Play:
Click on viruses to deal damage and harvest RAM. Viruses stream down paths on the right—if they enter a folder, you must click the folder to open it and destroy them inside. Buy towers from the shop (bottom left) to defend automatically.

RAM is your currency, earned passively and by killing viruses. Use it to purchase towers and upgrades between waves. Be careful: shop items become more expensive the more you use them! Game Over occurs if you lose all your files at the bottom.`,
      role: "Gameplay Programmer",
      roleDescription:
        "Designed and programmed the entire game, including player mechanics, enemy AI, and level design.",
      features: [
        "Active Clicking & Tower Defense Hybrid",
        "Folder/File System Protection Mechanics",
        "Multiple Tower Types (Firewall, Sentinel, Quarantine)",
        "Upgrade System for Abilities & Economy",
        "Wave-based Progression",
      ],
      technologies: [
        "Godot 4",
        "GDScript",
        "Tower Defense",
        "Web Export",
      ],
      embedUrl:
        "https://itch.io/embed-upload/16264064?color=000f06",
      gamePageUrl: "https://olatiny.itch.io/b0tnet",
      media: [],
      links: [],
    },
    "unity-ahooter": {
      title: "Flap",
      subtitle: "Flappy Bird Remake - Unity",
      description:
        "In order to start learning Unity Engine I worked through the classic Flappy Bird and made Flap. I created custom pixel art and learned Gamobjects, how to integrate logic between them, the UI UX integration to the scene and the overall process of finilazing a 2D game in Unity.",
      role: "Solo Developer",
      roleDescription:
        "Implemented all game objects, logic scripts, pixel art and the UI.",
      features: [
        "Custom Pixel Art",
        "Score Counter",
        "End Screen UI",
        "WebGL optimized",
      ],
      technologies: ["Unity", "C#", "WebGL", "Visual Studio"],
      // IMPORTANT: Replace this URL with the one from your Itch.io Dashboard -> Edit Game -> Distribute -> Embed Game.
      // The current URL below uses the WIDGET ID (4237188) which is likely WRONG for embed-upload.
      // It should look like: https://itch.io/embed-upload/YOUR_UPLOAD_ID?color=000f06
      embedUrl:
        "https://itch.io/embed-upload/16289815?color=333333",
      gamePageUrl: "https://cansuoner.itch.io/flap",
      media: [],
      links: [],
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
      // Try to scroll to the section matching the game type
      let targetSection = "ue5";
      if (gameId.includes("godot")) targetSection = "godot";
      if (gameId.includes("unity")) targetSection = "unity";

      const section = document.getElementById(targetSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Helper to determine if the URL is a widget or a playable embed
  const isWidget =
    game.embedUrl && game.embedUrl.includes("/embed/");
  const isPlayable =
    game.embedUrl && game.embedUrl.includes("/embed-upload/");

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
          <p className="text-gray-600 max-w-3xl whitespace-pre-wrap">
            {game.description}
          </p>
        </motion.div>

        {/* Embed Section */}
        {game.embedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-6 flex flex-col items-center">
              {/* Title */}
              <div className="flex items-center gap-2 mb-6 self-start">
                <Gamepad2 className="w-6 h-6 text-[#7C4DFF]" />
                <h3 className="text-xl text-gray-800 font-semibold">
                  {isPlayable
                    ? "Play Now"
                    : "Available on Itch.io"}
                </h3>
              </div>

              {/* Logic to choose between Widget and Playable Iframe */}
              {isWidget ? (
                <div className="flex flex-col items-center gap-4">
                  {/* Widget Iframe */}
                  <iframe
                    src={game.embedUrl}
                    width="552"
                    height="167"
                    frameBorder="0"
                    className="max-w-full shadow-md rounded-lg"
                  >
                    <a href={game.gamePageUrl || "#"}>
                      {game.title}
                    </a>
                  </iframe>

                  <div className="text-center max-w-lg mt-4 text-sm text-gray-500">
                    <p className="mb-2">
                      The game is hosted on Itch.io. Click the
                      banner above to visit the game page.
                    </p>
                    <p className="italic text-xs text-gray-400">
                      (To play directly on this page, replace
                      the widget URL in the code with the 'Embed
                      Game' URL from your Itch.io dashboard.)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative shadow-2xl">
                    <iframe
                      src={game.embedUrl}
                      className="w-full h-full border-0 absolute inset-0"
                      allowFullScreen
                      allow="autoplay; fullscreen; gamepad"
                    />
                  </div>

                  {/* Troubleshooting Tip for User */}
                  <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl text-sm">
                    <p className="font-semibold mb-1">
                      Game not loading?
                    </p>
                    <p>
                      The current URL (
                      <code>{game.embedUrl}</code>) might be
                      using the <strong>Game ID</strong> instead
                      of the <strong>Upload ID</strong>.
                    </p>
                    <p className="mt-2">
                      To fix this:
                      <ol className="list-decimal ml-5 mt-1 space-y-1">
                        <li>
                          Go to your Itch.io Dashboard &gt; Edit
                          Game &gt; <strong>Distribute</strong>.
                        </li>
                        <li>Ensure "Embed game" is checked.</li>
                        <li>
                          Copy the iframe URL provided there (it
                          will contain a different number than{" "}
                          {
                            game.embedUrl
                              .split("/")
                              .pop()
                              ?.split("?")[0]
                          }
                          ).
                        </li>
                        <li>
                          Update the <code>embedUrl</code> in{" "}
                          <code>GameDetailPage.tsx</code>.
                        </li>
                      </ol>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

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
