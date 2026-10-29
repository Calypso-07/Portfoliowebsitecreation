import { motion } from "motion/react";
import {
  Gamepad2,
  Code,
  Palette,
  Joystick,
  Bot,
  Box,
  Wrench,
  ArrowRight
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    {
      id: "ue5",
      title: "Unreal Engine 5",
      icon: Gamepad2,
      gradient: "from-[#A0E7E5] to-[#7DD3C0]",
      description: "Level Design, Gameplay Systems & Prototyping",
      size: "wide",
      tone: "teal",
      number: "01",
    },
    {
      id: "godot",
      title: "Godot Engine",
      icon: Bot,
      gradient: "from-[#A0E7E5] to-[#7C4DFF]",
      description: "Game Jam Prototyping & Systems Design",
      size: "standard",
      tone: "indigo",
      number: "02",
    },
    {
      id: "unity",
      title: "Unity",
      icon: Box,
      gradient: "from-[#7C4DFF] to-[#FFABCD]",
      description: "Shipped Games & Professional Development",
      size: "standard",
      tone: "pink",
      number: "03",
    },
    {
      id: "playdate",
      title: "Playdate",
      icon: Joystick,
      gradient: "from-[#D4BBDD] to-[#B794C4]",
      description: "Experimental Game Design",
      size: "standard",
      tone: "lavender",
      number: "04",
    },
    {
      id: "software-dev",
      title: "Software Development",
      icon: Code,
      gradient: "from-[#B4F8C8] to-[#8FE3B4]",
      description: "AI hackathon project",
      size: "standard",
      tone: "mint",
      number: "05",
    },
    {
      id: "artwork",
      title: "Artwork",
      icon: Palette,
      gradient: "from-[#FFD4E5] to-[#FFABCD]",
      description: "Illustration & Visual Storytelling",
      size: "standard",
      tone: "rose",
      number: "06",
    },
    {
      id: "tools",
      title: "Tools & Technical Design",
      icon: Wrench,
      gradient: "from-[#7C4DFF] to-[#A0E7E5]",
      description: "Internal tools, pipeline, and workflow automation",
      page: "tools",
      size: "wide",
      tone: "aqua",
      number: "07",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start px-6 py-20 bg-gradient-to-br from-[#E8F5F5] via-[#F5EBFA] to-[#FFF5F7]"
    >
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-5xl text-[#7C4DFF] mb-12 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hi, I'm Cansu
            </motion.h1>

            <motion.div
              className="space-y-4 text-lg text-gray-700 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>
                I'm a Level Designer and Game Designer pursuing an MEng in Game
                Design, Development & Innovation at Duke University. I design
                player-focused spaces, gameplay systems, and puzzles, combining
                spatial thinking with hands-on implementation in Unreal Engine 5
                and Unity. My background in Civil Engineering shapes how I think
                about scale, structure, and player movement.
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
                className="px-6 py-3 bg-gradient-to-r from-[#A0E7E5] to-[#7C4DFF] text-white rounded-full shadow-lg font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(124, 77, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("ue5")}
              >
                View My Work
              </motion.button>

              <motion.button
                className="px-6 py-3 border-2 border-[#7C4DFF] text-[#7C4DFF] rounded-full shadow-lg font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(124, 77, 255, 0.05)" }}
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
            className="about-bento-heading text-center text-[#7C4DFF] text-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore My Work
          </motion.h2>

          <motion.div
            className="about-bento-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <motion.button
                  type="button"
                  key={section.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() =>
                    section.page
                      ? onNavigate(section.page)
                      : scrollToSection(section.id)
                  }
                  className={`about-bento-item about-bento-item--${section.size} group`}
                  aria-label={`Explore ${section.title}`}
                >
                  <div className="relative h-full w-full text-left">
                    <Card
                      className={`about-bento-surface about-bento-surface--${section.tone} relative h-full overflow-hidden`}
                    >
                      <CardContent className="about-bento-content">
                        <div className="flex items-start justify-between">
                          <div
                            className={`about-bento-icon flex items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} shadow-inner`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="about-bento-number">{section.number}</span>
                        </div>

                        <div className="about-bento-copy">
                          <CardTitle className="about-bento-title text-gray-800">
                            {section.title}
                          </CardTitle>
                          <CardDescription className="about-bento-description text-gray-600">
                            {section.description}
                          </CardDescription>
                        </div>

                        <span className="about-bento-link text-[#7C4DFF]">
                          Explore
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
