import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

// Served from src/public/images/ — Google Drive throttles hotlinked
// thumbnails, which made these covers fail intermittently.
const pizzaDeliveryCover = "/images/pizza-delivery-cover.png";
const wistarWagerCover = "/images/wistar-wager-cover.png";
const toBeSeenCover = "/images/to-be-seen-cover.png";
const tankArenaCover = "/images/tank-arena-cover.png";

interface UE5SectionProps {
  onNavigate: (page: string) => void;
}

interface UE5Project {
  id: string;
  title: string;
  role?: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  tags: string[];
}

export function UE5Section({ onNavigate }: UE5SectionProps) {
  const [playingVideo, setPlayingVideo] = useState<
    number | null
  >(null);

  const projects: UE5Project[] = [
    {
      id: "to-be-seen",
      title: "To Be Seen",
      role: "Level Design Lead",
      description:
        "A heartwarming, narrative-driven puzzle-platformer blending third-person exploration, first-person gameplay, and environmental puzzles. As Design Lead, I work across level layout, player flow, narrative, puzzle design, and implementation, translating multidisciplinary ideas into playable spaces. I whitebox and iterate levels in Unreal Engine 5 and prototype gameplay and puzzle systems through Blueprints.",
      videoUrl: "",
      thumbnailUrl: toBeSeenCover,
      tags: [
        "Unreal Engine 5",
        "Puzzle Design",
        "Level Design",
        "Narrative Design",
      ],
    },
    {
      id: "wistar-wager",
      title: "Wistar Wager",
      description:
        "A semester-long escape-the-facility puzzle-platformer developed by a six-person team. I designed one level and built two levels in Unreal Engine 5, focusing on player flow, mechanical clarity, and readable traversal. I also contributed to Blueprint implementation and audio design.",
      videoUrl: "",
      thumbnailUrl: wistarWagerCover,
      tags: [
        "Unreal Engine 5",
        "Blueprints",
        "Level Design",
        "Audio Design",
      ],
    },
    {
      id: "pizza-delivery",
      title: "Pizza Delivery - Zombies Eat Free",
      description:
        "A first-person shooter created by a six-person team for a game jam themed “Pay to Win.” I designed combat spaces around cover placement, zombie spawn locations, movement, and encounter pacing, while contributing to gameplay implementation in Unreal Engine 5. The central mechanic turns money into health, ammunition, and the resource the player needs to escape the town.",
      // LOCAL FILE: Upload your video to /public/videos/ and use: "/videos/your-video.mp4"
      // YOUTUBE: Use "https://www.youtube.com/embed/YOUR_VIDEO_ID"
      // VIMEO: Use "https://player.vimeo.com/video/YOUR_VIDEO_ID"
      videoUrl: "",
      // LOCAL IMAGE: Upload to /public/images/ and use: "/images/thumbnail.png"
      // OR use any image URL
      thumbnailUrl: pizzaDeliveryCover,
      tags: ["Unreal Engine 5", "Blueprints", "C++", "Game Jam"],
    },
    {
      id: "tank-arena",
      title: "Tank Arena",
      description:
        "A 2-player local arcade tank battle built from scratch in Unreal Engine, featuring two maps, six game modes, three projectile types, and four gameplay power-ups. I developed the local multiplayer framework, combat interactions, scoring, match flow, and custom VFX/SFX.",
      videoUrl: "",
      thumbnailUrl: tankArenaCover,
      tags: [
        "Unreal Engine 5",
        "Blueprints",
        "Local Multiplayer",
        "VFX / SFX",
      ],
    },
  ];

  return (
    <section
      id="ue5"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#E8F5F5] via-[#F0FFFF] to-[#E0F7FA]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#7C4DFF] mb-4">
            Unreal Engine 5
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I use Unreal Engine 5 to design and implement
            gameplay spaces, level flow, puzzles, and gameplay
            systems through Blueprints and C++. My work ranges
            from whiteboxing and spatial design to mechanics
            prototyping, multiplayer gameplay, and iteration
            based on playtesting. I also work with Perforce in
            multidisciplinary development teams.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto bg-gradient-to-br from-[#A0E7E5] to-[#7DD3C0] flex items-center justify-center group">
                  {project.videoUrl &&
                  playingVideo === index ? (
                    project.videoUrl.includes("youtube.com") ||
                    project.videoUrl.includes("vimeo.com") ? (
                      <iframe
                        src={project.videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={project.videoUrl}
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        autoPlay
                      />
                    )
                  ) : project.thumbnailUrl ? (
                    <>
                      <img
                        src={project.thumbnailUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {project.videoUrl && (
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
                      {project.videoUrl ? (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onClick={() => setPlayingVideo(index)}
                          className="relative z-10 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
                        >
                          <Play className="w-8 h-8 text-[#7C4DFF] ml-1" />
                        </motion.div>
                      ) : (
                        <div className="relative z-10 text-white/90 text-center p-6 px-8">
                          <p
                            className="mb-1"
                            style={{ fontWeight: 600 }}
                          >
                            {project.title}
                          </p>
                          <p className="text-sm text-white/70">
                            {`Add cover: /images/${project.id}-cover.png`}
                          </p>
                        </div>
                      )}
                      {project.videoUrl && (
                        <div className="absolute bottom-4 right-4 text-white/80 text-sm">
                          Video Demo
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3
                    className={`text-gray-800 ${project.role ? "mb-1" : "mb-4"}`}
                  >
                    {project.title}
                  </h3>
                  {project.role && (
                    <p
                      className="text-[#7C4DFF] mb-4"
                      style={{ fontWeight: 600 }}
                    >
                      {project.role}
                    </p>
                  )}
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <motion.button
                    onClick={() => onNavigate(`game/${project.id}`)}
                    className="flex items-center gap-2 text-[#7C4DFF] hover:gap-3 transition-all mb-6 group w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>View Full Details</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}