import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productSerum from "@/assets/product-serum.jpg";
import productMask from "@/assets/product-mask.jpg";
import productKit from "@/assets/product-kit.jpg";

const programs = [
  {
    id: "gpeel",
    name: "G-Peel",
    title: "G-Peel",
    subtitle: "매끄럽고 맑은 피부 결을 선사하는 광채 프로그램",
    description:
      "스트레스와 환경 오염으로부터 피부를 보호하고, 더욱 빛나는 피부를 위한 완벽한 선택이 될 것입니다.",
    tabs: ["All", "Kit", "Refill", "Mask"],
    products: [
      {
        id: 1,
        name: "[0.1% 여배우 홈케어] G 필 프로그램",
        description: "광채&피부결 케어",
        price: "299,000",
        image: productSerum,
      },
      {
        id: 2,
        name: "G필 원데이에스테틱",
        description: "광채&피부결 케어",
        price: "49,000",
        image: productMask,
      },
      {
        id: 3,
        name: "[회원전용 30%할인] 스마트 베일™ 글로우 실러 마스크 세트 6매입",
        description: "광채&피부결 케어",
        price: "99,000",
        image: productKit,
      },
    ],
  },
  {
    id: "tpeel",
    name: "T-Peel",
    title: "T-Peel",
    subtitle: "태초의 순수함으로 돌아가는 트러블 클리닉 프로그램",
    description:
      "과다피지와 유분, 수분 부족으로 지친 피부를 위한 전문적인 케어 프로그램입니다.",
    tabs: ["All", "Kit", "Refill", "Mask"],
    products: [
      {
        id: 1,
        name: "홈케어 트러블 솔루션 T필 프로그램",
        description: "트러블&모공 케어",
        price: "199,000",
        originalPrice: "347,000",
        discount: "43%",
        image: productKit,
      },
      {
        id: 2,
        name: "[NEW] 크라이오-케어™ 마스크",
        description: "트러블&피부진정 케어",
        price: "49,000",
        image: productMask,
      },
      {
        id: 3,
        name: "[회원전용] T필 프로그램 3종 리필",
        description: "자사몰 단독 회원할인",
        price: "99,000",
        image: productSerum,
      },
    ],
  },
];

const DiscoverRoutine = () => {
  const [activeTabs, setActiveTabs] = useState<Record<string, number>>({
    gpeel: 0,
    tpeel: 0,
  });

  return (
    <section className="py-16 md:py-24 bg-warm-cream">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            DISCOVER <span className="text-gold">YOUR ROUTINE</span>
          </h2>
        </motion.div>

        {/* Programs */}
        {programs.map((program, programIndex) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: programIndex * 0.2 }}
            className="mb-20 last:mb-0"
          >
            {/* Program Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gold mb-2">
                  {program.title}
                </h3>
                <p className="text-lg text-foreground font-medium mb-1">
                  {program.subtitle}
                </p>
                <p className="text-muted-foreground text-sm md:text-base max-w-md">
                  {program.description}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex gap-2">
                {program.tabs.map((tab, tabIndex) => (
                  <button
                    key={tab}
                    onClick={() =>
                      setActiveTabs((prev) => ({ ...prev, [program.id]: tabIndex }))
                    }
                    className={`px-4 py-2 text-sm font-medium rounded transition-all duration-300 ${
                      activeTabs[program.id] === tabIndex
                        ? "bg-gold text-primary-foreground"
                        : "bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.products.map((product, productIndex) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: productIndex * 0.1 }}
                  className="group"
                >
                  <Link to="/shop" className="block">
                    <div className="relative aspect-square bg-background rounded-sm overflow-hidden mb-4 shadow-soft">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-body font-semibold text-foreground text-sm md:text-base mb-1 group-hover:text-gold transition-colors line-clamp-2">
                      {product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2">
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}원
                        </span>
                      )}
                      <span className="text-foreground font-medium">
                        {product.price}원
                      </span>
                      {product.discount && (
                        <span className="text-xs text-destructive font-bold">
                          {product.discount}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-8">
              <Button variant="goldOutline" size="lg" asChild>
                <Link to="/shop" className="group">
                  {program.title} Program
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverRoutine;
