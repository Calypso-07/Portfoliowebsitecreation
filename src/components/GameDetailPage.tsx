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
    "unity-runnerguy": {
      title: "Runner Guy",
      subtitle: "Endless Runner — Internship Project",
      description:
        "A Subway Surfers–style endless runner. When I joined the project it had unresolved bugs, no ad integration, and a UI that broke across screen sizes. I rebuilt the Canvas UI from scratch, fixed the critical bugs, got the game playable again, integrated ads, and published it on Pixidus.",
      role: "Unity Developer Intern",
      roleDescription:
        "Owned UI rebuild, bug fixing, ad integration, and shipping the build to Pixidus. Focused on making the game stable and responsive across different device resolutions.",
      features: [
        "Full Canvas UI rebuild for multi-resolution / screen-size support",
        "Critical gameplay and stability bug fixes",
        "Ad SDK integration",
        "Published on Pixidus (pixidus.com)",
      ],
      technologies: [
        "Unity",
        "C#",
        "UI Canvas",
        "Mobile",
        "Ad Integration",
      ],
      // Self-host WebGL: "/games/runnerguy/index.html"
      // Or itch embed-upload URL. Leave empty to hide the play frame.
      embedUrl: "",
      // Optional: iframe preview of another site (many sites block embedding)
      previewUrl: "",
      gamePageUrl: "https://pixidus.com",
      media: [
        {
          type: "video",
          // YouTube: "https://www.youtube.com/embed/VIDEO_ID"
          // Local: "/videos/runnerguy-demo.mp4"
          // Drive: "https://drive.google.com/file/d/FILE_ID/preview"
          url: "",
          // Local jpg/png/gif: "/images/runnerguy-thumb.jpg"
          thumbnail: "",
          title: "Gameplay Demo",
        },
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "UI Rebuild & Bug Fixes",
        },
      ],
      links: [
        {
          label: "Play on Pixidus",
          url: "https://pixidus.com",
          icon: "external",
        },
      ],
    },
    "unity-trivia-football": {
      title: "Trivia Football",
      subtitle: "Football Trivia — Internship Project",
      description:
        "A football-themed trivia game shipped on Mackolik, one of Turkey’s most widely used sports platforms. Questions are loaded from CSV. The run has three stages with rising difficulty and score weighting, four lifelines (50/50, double answer, ask the audience, and pass), a how-to-play screen, and a dynamic leaderboard with weekly, monthly, and all-time rankings — plus your own rank pinned at the bottom.",
      role: "Unity Developer Intern",
      roleDescription:
        "Built the game end-to-end: CSV question pipeline, lifeline systems, staged difficulty and scoring, leaderboard UX, how-to-play flow, and the final production build for Mackolik.",
      features: [
        "Questions loaded from CSV",
        "Four lifelines: 50/50, Double Answer, Ask the Audience, Pass",
        "Three-stage difficulty with score scaling",
        "Weekly, monthly, and all-time leaderboards",
        "Fixed personal rank row at the bottom of the board",
        "How-to-play onboarding screen",
        "Published on Mackolik",
      ],
      technologies: [
        "Unity",
        "C#",
        "CSV Data",
        "Leaderboards",
        "UI/UX",
      ],
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "",
      media: [
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "Gameplay Demo",
        },
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "Lifelines & Leaderboard",
        },
      ],
      links: [
        // Add Mackolik / store URL when you have it:
        // { label: "Play on Mackolik", url: "https://...", icon: "external" },
      ],
    },
    "unity-solitaire-colors": {
      title: "Solitaire Colors",
      subtitle: "Mobile WebGL Port — Internship Project",
      description:
        "Took a Solitaire game that was packed for Android, decoded and repaired the build, then adapted it to run as mobile WebGL. Added advertising and paid purchase flows so the web version could monetize like the native app.",
      role: "Unity Developer Intern",
      roleDescription:
        "Handled decode/fix of the packed Android build, WebGL adaptation for mobile browsers, and placement of ads plus paid purchase integration.",
      features: [
        "Decoded and fixed a packed Android build",
        "Adapted gameplay for mobile WebGL",
        "Ad placement and integration",
        "Paid purchase / IAP wiring",
      ],
      technologies: [
        "Unity",
        "C#",
        "WebGL",
        "Mobile Web",
        "Ads",
        "IAP",
      ],
      // Self-host: "/games/solitaire-colors/index.html"
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "",
      media: [
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "Gameplay Demo",
        },
      ],
      links: [],
    },
    "unity-sudoku": {
      title: "Sudoku Localization",
      subtitle: "Multi-language Support — Internship Project",
      description:
        "Configured localization for a Sudoku title so the game works correctly in multiple languages — strings, UI layout considerations, and locale switching.",
      role: "Unity Developer Intern",
      roleDescription:
        "Set up and validated localization settings so players can experience the game in different languages without broken UI or missing text.",
      features: [
        "Multi-language localization setup",
        "Locale-aware string and UI handling",
        "Verified gameplay across supported languages",
      ],
      technologies: ["Unity", "Localization", "i18n", "C#"],
      embedUrl: "",
      previewUrl: "",
      gamePageUrl: "",
      media: [
        {
          type: "video",
          url: "",
          thumbnail: "",
          title: "Localization Walkthrough",
        },
      ],
      links: [],
    },
    "unity-shooter": {
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
      // itch.io Embed Game URL (Distribute tab)
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
  const isItchEmbed =
    game.embedUrl &&
    game.embedUrl.includes("itch.io") &&
    game.embedUrl.includes("/embed-upload/");
  const isSelfHosted =
    game.embedUrl &&
    (game.embedUrl.startsWith("/games/") ||
      game.embedUrl.endsWith(".html"));
  const isPlayable =
    isItchEmbed ||
    isSelfHosted ||
    (game.embedUrl && !isWidget);

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

        {/* Embed / Play Section */}
        {game.embedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-6 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-6 self-start">
                <Gamepad2 className="w-6 h-6 text-[#7C4DFF]" />
                <h3 className="text-xl text-gray-800 font-semibold">
                  {isPlayable
                    ? "Play Now"
                    : "Available Externally"}
                </h3>
              </div>

              {isWidget ? (
                <div className="flex flex-col items-center gap-4">
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
                    <p>
                      Hosted externally. Use the banner above or
                      the links below to open the game.
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
                      allow="autoplay; fullscreen; gamepad; clipboard-write"
                    />
                  </div>

                  {isItchEmbed && (
                    <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl text-sm">
                      <p className="font-semibold mb-1">
                        Game not loading?
                      </p>
                      <p>
                        Use the <strong>Embed Game</strong> URL
                        from itch.io Dashboard → Edit Game →
                        Distribute (embed-upload), not the widget
                        ID.
                      </p>
                    </div>
                  )}

                  {isSelfHosted && (
                    <p className="text-sm text-gray-500">
                      Self-hosted WebGL build from{" "}
                      <code>{game.embedUrl}</code>. If it fails
                      to load, check compression headers or host
                      on itch.io instead.
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* External site preview (optional — many sites block iframes) */}
        {game.previewUrl && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-6">
              <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-[#7C4DFF]" />
                  <h3 className="text-xl text-gray-800 font-semibold">
                    Live Preview
                  </h3>
                </div>
                <a
                  href={game.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#7C4DFF] hover:underline"
                >
                  Open in new tab
                </a>
              </div>
              <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
                <iframe
                  src={game.previewUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  title={`${game.title} preview`}
                />
              </div>
              <p className="text-xs text-gray-400 mt-3">
                If this shows blank, the site blocks embedding
                (X-Frame-Options). Use “Open in new tab” or a
                gameplay video instead.
              </p>
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
                      <div className="absolute inset-0 bg-black/10" />
                      {media.url ? (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onClick={() => setPlayingVideo(index)}
                          className="relative z-10 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
                        >
                          <Play className="w-8 h-8 text-[#7C4DFF] ml-1" />
                        </motion.div>
                      ) : (
                        <div className="relative z-10 text-white/90 text-center p-6 max-w-md">
                          <p className="font-medium mb-2">
                            {media.title}
                          </p>
                          <p className="text-sm text-white/75">
                            Add{" "}
                            <code className="text-xs bg-black/20 px-1 rounded">
                              thumbnail
                            </code>{" "}
                            (jpg/png/gif) and optional{" "}
                            <code className="text-xs bg-black/20 px-1 rounded">
                              url
                            </code>{" "}
                            (video) in GameDetailPage.tsx
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

            {((game.links && game.links.length > 0) ||
              game.gamePageUrl) && (
              <>
                <h4 className="mb-3 text-gray-800">Links</h4>
                <div className="space-y-3">
                  {game.links?.map(
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
                  {game.gamePageUrl &&
                    !(game.links || []).some(
                      (l: any) => l.url === game.gamePageUrl,
                    ) && (
                      <motion.a
                        href={game.gamePageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#A0E7E5]/20 to-[#7DD3C0]/20 rounded-xl hover:from-[#A0E7E5]/30 hover:to-[#7DD3C0]/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-[#2D8B8A]" />
                        <span className="text-gray-700">
                          Open game page
                        </span>
                      </motion.a>
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
