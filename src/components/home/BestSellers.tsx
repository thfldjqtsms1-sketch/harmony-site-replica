import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productDevice from "@/assets/product-device.jpg";
import productSerum from "@/assets/product-serum.jpg";

const products = [
  {
    id: 1,
    name: "1분 완판템 글로우 시그니처 뷰티디바이스",
    price: "599,000",
    image: productDevice,
    soldOut: true,
  },
  {
    id: 2,
    name: "글로우 베이직",
    price: "990,000",
    image: productSerum,
    soldOut: false,
  },
];

const BestSellers = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-cream">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-2">
            Signature Care of Aesthetic Programs
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            BEST <span className="text-gold">SELLERS</span>
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to="/shop" className="block">
                <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.soldOut && (
                    <div className="absolute inset-0 bg-dark/50 flex items-center justify-center">
                      <span className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                        SOLD OUT
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-body font-semibold text-foreground text-base md:text-lg mb-1 group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">
                  판매가 <span className="text-foreground font-medium">{product.price}원</span>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Shop All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/shop" className="group">
              Shop All
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellers;
