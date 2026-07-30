import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

// Existing personal project cover
const flapCover =
  "https://drive.google.com/thumbnail?id=1AJpm8aEgOdSqXGCFBTQSUS_5P0-aIZla&sz=w2000";

interface UnitySectionProps {
  onNavigate: (page: string) => void;
}

export function UnitySection({
  onNavigate,
}: UnitySectionProps) {
  const [playingVideo, setPlayingVideo] = useState<
    number | null
  >(null);

  const projects = [
    {
      id: "unity-runnerguy",
      title: "Runner Guy",
      description:
        "Subway Surfers–style endless runner brought from a broken build to production. Rebuilt the entire UI Canvas for multi-resolution support, fixed critical bugs, integrated ads, and published on Pixidus.",
      // LOCAL: "/videos/runnerguy-demo.mp4" | YouTube: "https://www.youtube.com/embed/VIDEO_ID"
      videoUrl: "/videos/runnerguy-video.mp4",
      // LOCAL: "/images/runnerguy-thumb.jpg" or .gif | Drive thumbnail / Imgur also work
      thumbnailUrl: "",
      tags: ["Unity", "C#", "UI Canvas", "Ads", "Mobile"],
    },
    {
      id: "unity-trivia-football",
      title: "Trivia Football",
      description:
        "Football-themed trivia game with CSV-driven questions, four lifelines, three difficulty stages, and a dynamic weekly / monthly / all-time leaderboard. Built end-to-end and shipped on Mackolik.",
      videoUrl: "",
      thumbnailUrl: "",
      tags: ["Unity", "C#", "CSV", "Leaderboard", "Mackolik"],
    },
    {
      id: "unity-solitaire-colors",
      title: "Solitaire Colors",
      description:
        "Took a packed Android Solitaire build, decoded and fixed it, then adapted it for mobile WebGL. Wired up ads and in-app purchases for monetization.",
      videoUrl: "",
      thumbnailUrl: "",
      tags: ["Unity", "WebGL", "IAP", "Ads", "Mobile"],
    },
    {
      id: "unity-sudoku",
      title: "Sudoku Localization",
      description:
        "Configured localization so the Sudoku game runs correctly across multiple languages and regional settings.",
      videoUrl: "",
      thumbnailUrl: "",
      tags: ["Unity", "Localization", "i18n"],
    },
    {
      id: "unity-shooter",
      title: "Flap!",
      description:
        "A 2D game built in Unity. Features Logic Management, custom Pixel art, and a custom UI system. Fully playable in the browser via WebGL.",
      videoUrl: "",
      thumbnailUrl: flapCover,
      tags: ["Unity", "C#", "WebGL"],
    },
  ];

  return (
    <section
      id="unity"
      className="py-20 px-6 bg-gradient-to-br from-[#F3E5F5] via-[#E8D5F0] to-[#DCC5E8]"
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
            Unity Development
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Internship shipping work and personal projects —
            UI systems, monetization, localization, and
            production-ready Unity / C# builds.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto min-h-[220px] bg-gradient-to-br from-[#A0E7E5] to-[#7DD3C0] flex items-center justify-center group">
                  {project.videoUrl &&
                  playingVideo === index ? (
                    project.videoUrl.includes("youtube.com") ||
                    project.videoUrl.includes("vimeo.com") ||
                    project.videoUrl.includes("drive.google.com") ? (
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
                    <div className="text-white/90 text-center p-6 px-8">
                      <p className="mb-1 font-medium">
                        {project.title}
                      </p>
                      <p className="text-sm text-white/70">
                        Add thumbnail: /images/
                        {project.id.replace("unity-", "")}
                        -thumb.jpg
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="mb-4 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <motion.button
                    onClick={() =>
                      onNavigate(`game/${project.id}`)
                    }
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
