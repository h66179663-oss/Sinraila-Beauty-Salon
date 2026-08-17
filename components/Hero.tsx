"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Phone, CalendarHeart } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_salon_1786988271549.jpg"
          alt="Elegant beauty salon interior"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#f4ece1] text-[#b68f23] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm border border-[#e8dac2]">
              Beauty Salon &bull; Gular Naka, Banda
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight mb-6"
          >
            Your Beauty, <br />
            <span className="text-[#D4AF37] italic font-normal">Our Passion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed"
          >
            Enhance your natural beauty with professional beauty and salon services at Sinraila Beauty Salon, Banda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
            >
              <CalendarHeart className="w-5 h-5 mr-2" />
              Book an Appointment
            </a>
            <a
              href="tel:06394293474"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Phone className="w-5 h-5 mr-2 text-[#D4AF37]" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
