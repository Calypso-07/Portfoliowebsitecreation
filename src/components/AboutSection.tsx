import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "figma:asset/5d83ef23fca8aeeff3a348ac1ad4deedb39b7caf.png";
import {
  Gamepad2,
  Code,
  Palette,
  Joystick,
} from "lucide-react";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

export function AboutSection({
  onNavigate,
}: AboutSectionProps) {
  const sections = [
    {
      id: "ue5",
      title: "Unreal Engine 5",
      icon: Gamepad2,
      gradient: "from-[#A0E7E5] to-[#7DD3C0]",
      description: "Game development & interactive experiences",
    },
    {
      id: "playdate",
      title: "Playdate",
      icon: Joystick,
      gradient: "from-[#D4BBDD] to-[#B794C4]",
      description: "Handheld game development",
    },
    {
      id: "software-dev",
      title: "Software Development",
      icon: Code,
      gradient: "from-[#B4F8C8] to-[#8FE3B4]",
      description: "Full-stack applications & web development",
    },
    {
      id: "artwork",
      title: "Artwork",
      icon: Palette,
      gradient: "from-[#FFD4E5] to-[#FFABCD]",
      description: "Digital art & creative design",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start px-6 py-20 bg-gradient-to-br from-[#E8F5F5] via-[#F5EBFA] to-[#FFF5F7]"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Top Section: Text + Photo */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 pt-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-5xl text-[#7C4DFF] mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hi, I'm Cansu
            </motion.h1>

            <motion.div
              className="space-y-4 text-lg text-gray-700 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>
                I am an aspiring gameplay programmer currently
                studying at Duke University Game Development
                Design and Innovation Master's Program. I have
                experience in programming with Python and C++,
                and interested in AI implementations on games,
                with knowledge on Machine Learning and Neural
                Networks. I use Unreal Engine 5 and improving
                each day with blueprints. Right now, I am
                looking for internship opportunities to gain
                hands on experience and to get to know the game
                industry.
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#A0E7E5] to-[#7C4DFF] text-white rounded-full shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px rgba(124, 77, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("ue5")}
              >
                View My Work
              </motion.button>

              <motion.button
                className="px-6 py-3 border-2 border-[#7C4DFF] text-[#7C4DFF] rounded-full shadow-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(124, 77, 255, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("resume")}
              >
                Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Explore My Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-center mb-12 text-[#7C4DFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore My Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  onClick={() => scrollToSection(section.id)}
                  className="cursor-pointer h-full"
                >
                  <div className="relative group h-full">
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${section.gradient} rounded-2xl opacity-50 blur group-hover:opacity-75 transition-opacity`}
                    />
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.gradient} flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="mb-2 text-gray-800">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-1">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}