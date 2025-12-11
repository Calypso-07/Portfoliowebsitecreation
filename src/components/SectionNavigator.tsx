import { motion } from 'motion/react';
import { Gamepad2, Code, Palette, Joystick } from 'lucide-react';

export function SectionNavigator() {
  const sections = [
    {
      id: 'ue5',
      title: 'Unreal Engine 5',
      icon: Gamepad2,
      gradient: 'from-[#A0E7E5] to-[#7DD3C0]',
      description: 'Game development & interactive experiences',
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      icon: Code,
      gradient: 'from-[#D4BBDD] to-[#B794C4]',
      description: 'Full-stack applications & web development',
    },
    {
      id: 'artwork',
      title: 'Artwork',
      icon: Palette,
      gradient: 'from-[#FFD4E5] to-[#FFABCD]',
      description: 'Digital art & creative design',
    },
    {
      id: 'playdate',
      title: 'Playdate',
      icon: Joystick,
      gradient: 'from-[#B4F8C8] to-[#8FE3B4]',
      description: 'Handheld game development',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#FFF5F7] via-white to-[#F0F4FF]">
      <motion.div
        className="max-w-6xl mx-auto"
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-gray-800">{section.title}</h3>
                    <p className="text-gray-600 text-sm flex-1">{section.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
