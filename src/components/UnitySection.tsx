import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

// Placeholder image from Unsplash
const unityCover =
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
      id: "unity-shooter",
      title: "Flap!",
      description:
        "A 2D game built in Unity. Features Logic Management, custom Pixel art, and a custom UI system. Fully playable in the browser via WebGL.",
      videoUrl: "",
      thumbnailUrl: unityCover,
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
            Creating immersive 3D experiences and interactive
            applications using Unity and C#.
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
                    <div className="text-white/80 text-center p-6">
                      <p>Project Preview</p>
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
                    <span>View Full Details & Play</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm">
                      Unity
                    </span>
                    <span className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm">
                      C#
                    </span>
                    <span className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm">
                      WebGL
                    </span>
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
