"use client";

import { motion } from "motion/react";
import { Scissors, Flower2, Sparkles, Droplets } from "lucide-react";

const services = [
  { name: "Hair Styling", icon: Scissors, category: "Hair" },
  { name: "Haircut", icon: Scissors, category: "Hair" },
  { name: "Hair Care", icon: Droplets, category: "Hair" },
  { name: "Hair Spa", icon: Flower2, category: "Hair" },
  { name: "Facial", icon: Sparkles, category: "Skin" },
  { name: "Cleanup", icon: Droplets, category: "Skin" },
  { name: "Skin Care", icon: Sparkles, category: "Skin" },
  { name: "Threading", icon: Scissors, category: "Face" },
  { name: "Waxing", icon: Sparkles, category: "Body" },
  { name: "Makeup", icon: Sparkles, category: "Beauty" },
  { name: "Bridal Makeup", icon: Flower2, category: "Beauty" },
  { name: "Party Makeup", icon: Sparkles, category: "Beauty" },
  { name: "Manicure", icon: Droplets, category: "Hands & Feet" },
  { name: "Pedicure", icon: Droplets, category: "Hands & Feet" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#fdfbf7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-3 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Our Beauty Services
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our wide range of salon and beauty services designed to enhance your natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fcf8f2] text-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                <service.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-lg">{service.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{service.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-[#D4AF37] hover:bg-[#C5A028] rounded-full transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            Contact for Services & Booking
          </a>
        </div>
      </div>
    </section>
  );
}
