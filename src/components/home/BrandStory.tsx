import { motion } from "framer-motion";
import heroGold from "@/assets/hero-device-gold.jpg";

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-dark text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              Our signature care ritual
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-relaxed mb-6">
              Our signature care ritual is rooted in a meticulous exploration of aesthetic programs.
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed">
              우리의 시그니처 케어 리추얼은 에스테틱 프로그램에 대한 
              세심한 탐구에 뿌리를 두고 있습니다. 전문가의 손길을 
              집에서 경험할 수 있도록, 최상의 결과를 약속합니다.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-gold">
              <img
                src={heroGold}
                alt="Brand Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
