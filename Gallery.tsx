"use client";

import Image from "next/image";
import { motion } from "motion/react";

const images = [
  { src: "/images/gallery_interior_1786988299628.jpg", alt: "Salon interior", height: 600 },
  { src: "/images/gallery_hairstyling_1786988310211.jpg", alt: "Hair styling", height: 800 },
  { src: "/images/gallery_makeup_1786988323742.jpg", alt: "Makeup session", height: 600 },
  { src: "/images/gallery_skincare_1786988335799.jpg", alt: "Beauty treatments", height: 800 },
  { src: "/images/gallery_bridal_1786988349476.jpg", alt: "Bridal makeup", height: 800 },
  { src: "/images/gallery_details_1786988363628.jpg", alt: "Elegant beauty details", height: 600 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#fdfbf7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Take a look at our salon environment and some of the beautiful work we do for our clients.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={img.height}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
