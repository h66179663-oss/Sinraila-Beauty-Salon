"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#faebf0]/30 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-[#fdf5df] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-[#faebf0] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-16 text-center border border-gray-50"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Ready to Feel Beautiful?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Contact Sinraila Beauty Salon to ask about services or book your appointment. We look forward to welcoming you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:06394293474"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 mr-3 text-[#D4AF37]" />
              Call 063942 93474
            </a>
            <a
              href="https://wa.me/916394293474"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full hover:bg-[#25D366]/20 transition-colors shadow-sm"
            >
              <MessageCircle className="w-5 h-5 mr-3 text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
