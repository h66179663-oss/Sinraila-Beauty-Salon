"use client";

import { motion } from "motion/react";
import { MapPin, Clock, Navigation } from "lucide-react";

export default function LocationHours() {
  return (
    <section className="py-20 md:py-28 bg-[#fdfbf7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Location & Directions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-3 block">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
              Location & Hours
            </h2>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-grow">
              <div className="mb-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1 bg-[#fcf8f2] p-3 rounded-full text-[#D4AF37]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Sinraila Beauty Salon</h3>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                      Maheswari Devi Mandir, Ramlila Maidan, <br />
                      Gular Naka, Banda, <br />
                      Uttar Pradesh 210001
                    </p>
                  </div>
                </div>
                
                <a
                  href="https://maps.app.goo.gl/t6jfhDL91nCXkPhf9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors shadow-md ml-16"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#fcf8f2] p-3 rounded-full text-[#D4AF37]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Opening Hours</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center text-gray-600 border-b border-gray-50 pb-2">
                        <span>Sunday &ndash; Friday</span>
                        <span className="font-medium text-gray-900">11:30 AM &ndash; 8:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 border-b border-gray-50 pb-2">
                        <span>Saturday</span>
                        <span className="font-medium text-gray-900">11:00 AM &ndash; 8:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Image/Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.53612345678!2d80.3344!3d25.4789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI4JzQ0LjAiTiA4MMKwMjAnMDMuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={false} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0"
               title="Google Maps Location"
             ></iframe>
             <div className="absolute inset-0 bg-gray-100/10 pointer-events-none"></div>
             {/* If real map embed fails or is not perfectly accurate, the Get Directions link covers them */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
