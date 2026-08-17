"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

// Placeholder testimonials ready to be replaced with real ones later
const placeholders = [
  {
    name: "Happy Client",
    text: "Review coming soon...",
  },
  {
    name: "Happy Client",
    text: "Review coming soon...",
  },
  {
    name: "Happy Client",
    text: "Review coming soon...",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Client Stories
          </h2>
          <p className="text-gray-600 text-lg">
            We love making our clients feel beautiful. Check back soon for reviews.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholders.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#fdfbf7] p-8 rounded-2xl border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#f4ece1]" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] opacity-40" />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-6">&quot;{testimonial.text}&quot;</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
