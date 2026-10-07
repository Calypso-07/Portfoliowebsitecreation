import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Served from src/public/images/ — Google Drive throttles hotlinked thumbnails.
const styleShifterImage = "/images/style-shifter.png";

export function SoftwareDevSection() {
  return (
    <section
      id="software-dev"
      className="py-20 px-6 bg-gradient-to-br from-[#F0FFF4] via-[#E8FAF0] to-[#D4F4DD]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-[#7C4DFF] mb-4">Style Shifter</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative">
              <div className="aspect-video md:aspect-auto md:h-full relative overflow-hidden group">
                <ImageWithFallback
                  src={styleShifterImage}
                  alt="Style Shifter"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:col-span-3 p-8 flex flex-col justify-center">
              <h3 className="mb-4 text-gray-800">Style Shifter</h3>
              <p className="text-gray-600 mb-6">
                Built with a team during a three-day AI
                hackathon. People submit a name, a passage, or
                their own writing. The project learns that
                speaking style, then rewrites a chosen text or
                book in the same tone and voice.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#B4F8C8]/30 text-[#2D6A4F] rounded-full text-sm">
                  AI Hackathon
                </span>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="https://devpost.com/software/style-shifter?ref_content=my-projects-tab&ref_feature=my_projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B4F8C8] to-[#7C4DFF] text-white rounded-full shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </motion.a>

                <motion.a
                  href="https://github.com/Iwan000/StyleShifter"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-[#B4F8C8] text-[#7C4DFF] rounded-full"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
