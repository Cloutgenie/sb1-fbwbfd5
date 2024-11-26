import { motion } from "framer-motion";
import { Laptop, Cloud, Shield, Headphones, Zap, Users } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

export function Features() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
      >
        Complete Software Management
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={Laptop}
          title="No IT Team Required"
          description="We handle everything from development to maintenance, saving you the cost of an in-house IT team."
          delay={0.1}
        />
        <FeatureCard
          icon={Cloud}
          title="Fully Managed Cloud"
          description="Your software is hosted, monitored, and maintained 24/7 in our secure cloud infrastructure."
          delay={0.2}
        />
        <FeatureCard
          icon={Shield}
          title="Security & Updates"
          description="Continuous security monitoring, updates, and patches handled automatically by our team."
          delay={0.3}
        />
        <FeatureCard
          icon={Headphones}
          title="Round-Clock Support"
          description="Technical issues? Our expert support team is available 24/7 to help you out."
          delay={0.4}
        />
        <FeatureCard
          icon={Zap}
          title="Rapid Development"
          description="Get your custom software up and running quickly with our experienced development team."
          delay={0.5}
        />
        <FeatureCard
          icon={Users}
          title="Dedicated Team"
          description="Your personal tech team without the overhead of hiring and managing one."
          delay={0.6}
        />
      </div>
    </div>
  );
}