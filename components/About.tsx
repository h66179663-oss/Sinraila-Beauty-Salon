"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about_salon_1786988286475.jpg"
                alt="Sinraila Beauty Salon Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#faebf0] rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#fdf5df] rounded-full -z-10 blur-2xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-500">Welcome to</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Sinraila Beauty Salon
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Step into a world of elegance and relaxation at Sinraila Beauty Salon, located in the heart of Gular Naka, Banda. We are dedicated to providing a friendly, welcoming atmosphere where you can unwind and focus on your personal care.
              </p>
              <p>
                Whether you need everyday grooming, a fresh new haircut, or specialized beauty care for a special occasion, we offer a range of services designed to help you look and feel your absolute best. 
              </p>
              <p>
                Enjoy a clean, comfortable environment where your beauty needs are met with attention and care.
              </p>
            </div>
            
            <div className="mt-10">
              <a
                href="#services"
                className="inline-flex items-center text-[#D4AF37] font-semibold hover:text-gray-900 transition-colors group"
              >
                Explore our services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
