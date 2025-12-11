import { motion } from "motion/react";
import { Play, FileText, Download } from "lucide-react";
import { useState } from "react";
import crankAdventureThumbnail from "figma:asset/dd54056d5a207644e0d137e86e35bb2e0ab43f0d.png";

export function PlaydateSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Add your content here:
  // 🔒 LOCAL FILES (Private - Recommended):
  // Upload to /public/videos/ and use: "/videos/your-video.mp4"
  //
  // OR Public hosting:
  // YOUTUBE: Use "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  // VIMEO: Use "https://player.vimeo.com/video/YOUR_VIDEO_ID"
  // GOOGLE DRIVE: Use "https://drive.google.com/file/d/FILE_ID/preview"
  // STREAMABLE: Use "https://streamable.com/e/YOUR_VIDEO_ID"
  const videoUrl =
    "https://drive.google.com/file/d/1LB88VD2F23yWoO4U1oOMDLwyZNvNXtQj/preview";

  // LOCAL IMAGE: Upload to /public/images/ and use: "/images/thumbnail.png"
  // IMGUR: Use "https://i.imgur.com/YOUR_IMAGE.jpg"
  const thumbnailUrl = crankAdventureThumbnail;

  // LOCAL PDF: Upload to /public/documents/ and use: "/documents/your-doc.pdf"
  // GOOGLE DRIVE: Use "https://drive.google.com/file/d/1-JEbRm0VtcC4sZxq9G06Ip6_qDOaGUe-/view"
  const pdfUrl =
    "https://drive.google.com/file/d/1-JEbRm0VtcC4sZxq9G06Ip6_qDOaGUe-/view?usp=sharing";

  return (
    <section
      id="playdate"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#F3E5F5] via-[#E8D5F0] to-[#DCC5E8]"
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
            Playdate Development
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey in developing games for the Playdate
            handheld console, featuring unique gameplay
            mechanics and creative use of the crank controller.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="relative aspect-video bg-gradient-to-br from-[#D4BBDD] to-[#B794C4] flex items-center justify-center group">
              {videoUrl && isVideoPlaying ? (
                videoUrl.includes("youtube.com") ||
                videoUrl.includes("vimeo.com") ||
                videoUrl.includes("drive.google.com") ||
                videoUrl.includes("streamable.com") ? (
                  <iframe
                    src={videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    autoPlay
                  />
                )
              ) : thumbnailUrl ? (
                <>
                  <img
                    src={thumbnailUrl}
                    alt="Playdate Game"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {videoUrl && (
                    <>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsVideoPlaying(true)}
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
                  {videoUrl ? (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer"
                    >
                      <Play className="w-8 h-8 text-[#7C4DFF] ml-1" />
                    </motion.div>
                  ) : (
                    <div className="text-white/80 text-center p-6">
                      <p>Add your video URL</p>
                    </div>
                  )}
                  {videoUrl && (
                    <div className="absolute bottom-4 right-4 text-white/80 text-sm">
                      Gameplay Demo
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="p-8">
              <h3 className="mb-4 text-gray-800">
                Mail Delivery Demo
              </h3>
              <p className="text-gray-600 mb-4">
                A mail delivery game that creatively uses the
                Playdate's unique crank mechanism for character
                movement and environmental interactions.
                Features hand-drawn art and smooth 1-bit
                graphics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#D4BBDD]/30 text-[#6B4C8A] rounded-full text-sm">
                  Lua
                </span>
                <span className="px-3 py-1 bg-[#D4BBDD]/30 text-[#6B4C8A] rounded-full text-sm">
                  Playdate SDK
                </span>
                <span className="px-3 py-1 bg-[#D4BBDD]/30 text-[#6B4C8A] rounded-full text-sm">
                  Game Design
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4BBDD] to-[#B794C4] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-gray-800">
                    Project Description
                  </h4>
                  <p className="text-gray-600 mb-4">
                    I worked on the game “Mail Delivery” which
                    is still in progress. The player uses the
                    Playdate console to deliver post to the
                    neighborhood. They need to avoid obstacles
                    while being precise on sending the mail,
                    they can speed up by using the crank, which
                    represents the bike that the character
                    rides. Also there is a cute owl companion
                    which helps with the delivery every time an
                    owl food is acquired on the road.
                  </p>
                  <p className="text-gray-600">
                    Development focused on optimizing
                    performance for the hardware constraints
                    while maintaining smooth animations and
                    responsive controls. The project
                    demonstrates proficiency in Lua programming
                    and understanding of handheld game design
                    principles.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-2xl p-6 shadow-lg ${pdfUrl ? "cursor-pointer" : "opacity-50"}`}
              onClick={() => {
                if (pdfUrl) {
                  window.open(pdfUrl, "_blank");
                }
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4BBDD] to-[#B794C4] rounded-xl flex items-center justify-center">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800">
                      Development Documentation
                    </h4>
                    <p className="text-sm text-gray-600">
                      {pdfUrl
                        ? "Technical overview and design process"
                        : "Add PDF URL to enable download"}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-[#7C4DFF]">
                  PDF
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D4BBDD] to-[#B794C4] rounded-3xl p-8 text-center"
        >
          <h3 className="mb-3 text-white">Why Playdate?</h3>
          <p className="text-white/90 max-w-3xl mx-auto">
            The Playdate console represents a unique challenge
            in game development, combining retro aesthetics with
            innovative input mechanics. This project showcases
            my ability to work within hardware constraints while
            creating engaging gameplay experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}