import { motion } from "motion/react";
import { Play, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const styleShifterImage = "https://drive.google.com/thumbnail?id=1qkdWRrBbMdkdGln41dtvsxWdURhKhFqQ&sz=w2000"; // style shifter

export function SoftwareDevSection() {
  const projects = [
    {
      title: "Full-Stack Web Application",
      description:
        "A comprehensive web platform built with React, Node.js, and PostgreSQL. Features user authentication, real-time updates, and responsive design. Deployed on AWS with CI/CD pipeline.",
      image: styleShifterImage,
      liveLink:
        "https://devpost.com/software/style-shifter?ref_content=my-projects-tab&ref_feature=my_projects",
      githubLink: "https://github.com/Iwan000/StyleShifter",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
  ];

  return (
    <section
      id="software-dev"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#F0FFF4] via-[#E8FAF0] to-[#D4F4DD]"
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
            Software Development
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Full-stack development projects showcasing modern
            web technologies, clean code practices, and
            user-centered design.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative">
                  <div className="aspect-video md:aspect-auto md:h-full relative overflow-hidden group">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <h3 className="mb-4 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#B4F8C8]/30 text-[#2D6A4F] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveLink}
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
                      href={project.githubLink}
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
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B4F8C8] to-[#8FE3B4] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white">⚡</span>
            </div>
            <h4 className="mb-2 text-gray-800">
              Performance Focused
            </h4>
            <p className="text-sm text-gray-600">
              Optimized for speed and efficiency
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B4F8C8] to-[#8FE3B4] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white">📱</span>
            </div>
            <h4 className="mb-2 text-gray-800">
              Responsive Design
            </h4>
            <p className="text-sm text-gray-600">
              Fits perfectly to messaging app interfaces,
              without adding complexity
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B4F8C8] to-[#8FE3B4] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white">🔒</span>
            </div>
            <h4 className="mb-2 text-gray-800">
              AI Implementation
            </h4>
            <p className="text-sm text-gray-600">
              Uses the LLMs to effectively fit the needs of the
              user.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}