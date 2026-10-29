import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { AdaptiveImage } from "./AdaptiveImage";
import { AdaptiveVideoPlayer } from "./AdaptiveVideoPlayer";

interface ToolsSectionProps {
  onNavigate: (page: string) => void;
}

export function ToolsSection({ onNavigate }: ToolsSectionProps) {
  return (
    <section
      id="tools"
      className="py-20 px-6 bg-gradient-to-br from-[#E8F5F5] via-[#F5EBFA] to-[#F0FFF4]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#7C4DFF] mb-4">Tools & Technical Design</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As a designer with a strong technical background, I develop
            internal tools to streamline workflows, eliminate repetitive
            tasks, and empower multidisciplinary teams to iterate faster.
          </p>
        </motion.div>

        <div className="tools-project-list">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
            style={{ order: 2 }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 flex items-center">
                <AdaptiveImage
                  url="/images/texture-checker-fix-dialog.png"
                  alt="Texture Health Checker batch-fix confirmation dialog"
                  preferredAspect="landscape"
                  compact
                  className="w-full"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-gray-800 mb-1">
                  Unreal Texture Health Checker
                </h3>
                <p
                  className="text-[#7C4DFF] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  Unreal Engine 5, Python, PySide6
                </p>
                <p className="text-gray-600 mb-4">
                  A QA tool that scans normal maps, flags incorrect
                  compression or sRGB settings, and batch-fixes failing
                  assets for environment and technical art teams.
                </p>
                <motion.button
                  onClick={() => onNavigate("tools")}
                  className="flex items-center gap-2 text-[#7C4DFF] hover:gap-3 transition-all mb-6 group w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <div className="flex flex-wrap gap-2">
                  {["Unreal Engine 5", "Python", "PySide6", "QA Automation"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#A0E7E5]/20 text-[#2D8B8A] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
            style={{ order: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 flex items-center">
                <AdaptiveVideoPlayer
                  url="/videos/platform-generator-demo.mp4"
                  title="Procedural platform generation and reachability analysis demo"
                  preferredAspect="landscape"
                  compact
                  className="w-full"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-gray-800 mb-1">
                  Procedural Platform Generator & Reachability Checker
                </h3>
                <p
                  className="text-[#7C4DFF] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  Maya 2026.2, Python, PySide6, Applied Math
                </p>
                <p className="text-gray-600 mb-4">
                  A Maya tool that combines procedural platform generation
                  with graph-based reachability analysis, helping level
                  designers identify unreachable areas during early blockout
                  iteration.
                </p>
                <motion.button
                  onClick={() => onNavigate("tools")}
                  className="flex items-center gap-2 text-[#7C4DFF] hover:gap-3 transition-all mb-6 group w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Maya 2026.2",
                    "Python",
                    "PySide6",
                    "Graph-Based Reachability",
                  ].map((tag) => (
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
        </div>
      </div>
    </section>
  );
}
