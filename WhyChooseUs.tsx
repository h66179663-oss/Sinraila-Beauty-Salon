"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Professional Beauty Care",
    description: "Receive attentive and dedicated beauty services tailored to your needs.",
  },
  {
    title: "Personalized Attention",
    description: "Every client receives individualized care for the best possible results.",
  },
  {
    title: "Welcoming Environment",
    description: "Relax in our clean, comfortable, and friendly salon atmosphere.",
  },
  {
    title: "Convenient Location",
    description: "Easily accessible at Gular Naka, Banda, right in the heart of the city.",
  },
  {
    title: "Easy Appointment Booking",
    description: "Simple and straightforward booking process via call or WhatsApp.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Experience Elegance and Care
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              At Sinraila Beauty Salon, we believe in making every visit special. Here is why our clients trust us with their beauty needs.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Graphic / Color Block instead of a plain image to vary the layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:h-[600px] rounded-3xl overflow-hidden bg-[#f4ece1] flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
            <div className="relative z-10 text-center max-w-sm">
               <h3 className="font-playfair text-3xl md:text-4xl text-[#b68f23] mb-6 font-bold italic">
                 Radiate Confidence.
               </h3>
               <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
