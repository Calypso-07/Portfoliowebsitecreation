import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:cansuoner2003@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/cansu-oner/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Calypso-07",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#7C4DFF] to-[#A0E7E5] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="mb-4">Let's Connect</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new opportunities,
            creative projects, or potential collaborations. Feel
            free to reach out!
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 text-center text-white/80 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} Cansu's Portfolio.
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}