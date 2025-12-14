import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

const pizzaDeliveryCover = "https://drive.google.com/thumbnail?id=1tsLykXWahGshQehcEniebXquvAoyeqIN&sz=w2000";
const wistarWagerCover = "https://drive.google.com/thumbnail?id=1b17wpo4-2cIDmwlUlY5jhVKvSo6orJ6y&sz=w2000";

interface UE5SectionProps {
  onNavigate: (page: string) => void;
}

export function UE5Section({ onNavigate }: UE5SectionProps) {
  const [playingVideo, setPlayingVideo] = useState<
    number | null
  >(null);

  const projects = [
    {
      id: "pizza-delivery",
      title: "Pizza Delivery - Zombies Eat Free",
      description:
        "A first person shooter game made by me and 5 classmates in a Game Jam. The player need to deliver pizza in a zombie apocalypse to earn enough money to leave the town. He need to kill the zombies, but the gun shoots money, your health bar is your money, everything is money. The theme of the game jam was Pay to Win.",
      // LOCAL FILE: Upload your video to /public/videos/ and use: "/videos/your-video.mp4"
      // YOUTUBE: Use "https://www.youtube.com/embed/YOUR_VIDEO_ID"
      // VIMEO: Use "https://player.vimeo.com/video/YOUR_VIDEO_ID"
      videoUrl: "",
      // LOCAL IMAGE: Upload to /public/images/ and use: "/images/thumbnail.png"
      // OR use any image URL
      thumbnailUrl: pizzaDeliveryCover,
    },
    {
      id: "wistar-wager",
      title: "Wistar Wager",
      description:
        "An escape the facility game made using puzzles and platformers. It is a term long game project made by a 6 people team. I implemented blueprints, did level design, Audio Design, and built 2 levels in Unreal Engine 5.",
      videoUrl: "",
      thumbnailUrl: wistarWagerCover,
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
            I am currently learning how to make games in the
            unreal engine 5 in my master’s degree, using
            blueprints. I created multiple levels with switches,
            casting interfaces using different collision
            settings and personalized meshes. I am improving
            each day on how to use this incredible tool in a
            more efficient manner. I also work with perforce,
            creating a game with a team of 6.
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
                        <div className="text-white/80 text-center p-6">
                          <p>Add your video URL</p>
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
                  <h3 className="mb-4 text-gray-800">
                    {project.title}
                  </h3>
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
                    <span className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm">
                      Blueprints
                    </span>
                    <span className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm">
                      C++
                    </span>
                    <span className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm">
                      Nanite
                    </span>
                    <span className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm">
                      Lumen
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