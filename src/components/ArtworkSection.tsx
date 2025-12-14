import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const artworkImage = "https://drive.google.com/thumbnail?id=1Z2xEEax02kbXh2PDG5ru-zZalM3JlAdw&sz=w2000"; // king
const luffyArtwork = "https://drive.google.com/thumbnail?id=1d6RRNN_R2i89gPyow8N9u6UqO1_9J6De&sz=w2000"; // luffy
const dekuArtwork = "https://drive.google.com/thumbnail?id=1CDuhYVE4A45IiHTjBAmFUychvGEvLzUI&sz=w2000"; // deku
const originalCharacter = "https://drive.google.com/thumbnail?id=1pUZ9xkcHAJ67SCeB9XdwHB58alipwFg3&sz=w2000"; // original
const lemurArtwork = "https://drive.google.com/thumbnail?id=1kfQJBFHcwB2vlAOeYkOHVzWvYicbalze&sz=w2000"; // lemur

export function ArtworkSection() {
  const artworks = [
    {
      title: "King from the Owl House",

      image: artworkImage,
    },
    {
      title: "Luffy Fan Art",

      image: luffyArtwork,
    },
    {
      title: "Deku from Boku no Hero Academia",

      image: dekuArtwork,
    },
    {
      title: "DTIYS Challenge",

      image: originalCharacter,
    },
    {
      title: "Momo from Avatar the Last Airbender",

      image: lemurArtwork,
    },
  ];

  return (
    <section
      id="artwork"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#FFF0F5] via-[#FFE8F0] to-[#FFD4E5]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#7C4DFF] mb-4">Artwork</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my digital artwork, including
            character designs, environment concepts, and
            illustrations created for various projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div
                  className={`aspect-square overflow-hidden ${index === 4 ? "bg-white flex items-center justify-center" : ""}`}
                >
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className={`${index === 4 ? "w-full h-full object-contain" : "w-full h-full object-cover"} group-hover:scale-110 transition-transform duration-500`}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="mb-2">{artwork.title}</h3>
                    <p className="text-sm text-gray-200">
                      {artwork.description}
                    </p>
                  </div>
                </motion.div>

                <div className="p-4">
                  <h4 className="text-gray-800">
                    {artwork.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {artwork.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Created using Photoshop, Procreate, and Blender
          </p>
        </motion.div>
      </div>
    </section>
  );
}