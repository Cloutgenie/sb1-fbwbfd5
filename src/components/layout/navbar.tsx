import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Navbar() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Heart className="h-8 w-8 text-blue-500" />
          <span className="text-2xl font-bold text-white">Get Carezen</span>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={scrollToContact}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all cursor-pointer"
        >
          Contact Us
        </motion.button>
      </div>
    </nav>
  );
}