import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import productSerum from "@/assets/product-serum.jpg";
import productDevice from "@/assets/product-device.jpg";
import productMask from "@/assets/product-mask.jpg";
import productKit from "@/assets/product-kit.jpg";
import heroGold from "@/assets/hero-device-gold.jpg";

const categories = [
  { id: "all", name: "Shop all" },
  { id: "gpeel", name: "G-peel" },
  { id: "tpeel", name: "T-peel" },
  { id: "daily", name: "Daily care" },
  { id: "device", name: "Device" },
  { id: "refill", name: "Refill" },
];

const products = [
  {
    id: 1,
    name: "글로우 시그니처 뷰티디바이스",
    description: "프리미엄 홈케어",
    price: "599,000",
    category: "device",
    image: productDevice,
    soldOut: true,
    isNew: true,
  },
  {
    id: 2,
    name: "글로우 베이직",
    description: "데일리 케어 디바이스",
    price: "990,000",
    category: "device",
    image: productSerum,
  },
  {
    id: 3,
    name: "[0.1% 여배우 홈케어] G 필 프로그램",
    description: "광채&피부결 케어",
    price: "299,000",
    category: "gpeel",
    image: productKit,
  },
  {
    id: 4,
    name: "G필 원데이에스테틱",
    description: "광채&피부결 케어",
    price: "49,000",
    category: "gpeel",
    image: productMask,
  },
  {
    id: 5,
    name: "홈케어 트러블 솔루션 T필 프로그램",
    description: "트러블&모공 케어",
    price: "199,000",
    originalPrice: "347,000",
    discount: "43%",
    category: "tpeel",
    image: productKit,
    isNew: true,
  },
  {
    id: 6,
    name: "[NEW] 크라이오-케어™ 마스크",
    description: "트러블&피부진정 케어",
    price: "49,000",
    category: "tpeel",
    image: productMask,
    isNew: true,
  },
  {
    id: 7,
    name: "[회원전용 30%할인] 스마트 베일™ 글로우 실러 마스크 세트 6매입",
    description: "광채&피부결 케어",
    price: "99,000",
    category: "gpeel",
    image: productMask,
  },
  {
    id: 8,
    name: "[리미티드 에디션] 프리미엄 6종 앰플 키트",
    description: "골라쓰는 맞춤형 앰플",
    price: "99,000",
    category: "daily",
    image: productSerum,
    isNew: true,
  },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroGold})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/40 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 md:px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-4">
              Private Care Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
              프라이빗 케어를 통해 자신만의 속도로
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              축적해 가는 고유한 흐름, 그 확실한 변화의 힘
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-dark text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <Link to="#" className="block">
                  <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.soldOut && (
                      <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                        <span className="text-lg md:text-xl font-display font-bold text-primary-foreground">
                          SOLD OUT
                        </span>
                      </div>
                    )}
                    {product.isNew && !product.soldOut && (
                      <span className="absolute top-2 left-2 px-2 py-1 text-xs font-medium bg-gold text-primary-foreground rounded">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="font-body font-medium text-foreground text-sm mb-1 group-hover:text-gold transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}원
                      </span>
                    )}
                    <span className="text-sm text-foreground font-medium">
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
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
