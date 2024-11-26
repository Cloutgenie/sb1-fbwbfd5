import { motion } from "framer-motion";
import { Cloud, Headphones } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Software Solution,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient">
              Fully Managed
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            We build and manage your custom software so you don't need an IT team. 
            Focus on your business while we handle everything tech.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Cloud className="h-5 w-5 text-blue-500" />
              <span>Fully Managed Solution</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Headphones className="h-5 w-5 text-purple-500" />
              <span>24/7 Support Included</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10"
          id="contact-section"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Get Started with Zero IT Overhead
          </h2>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}