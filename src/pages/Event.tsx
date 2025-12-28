import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroGold from "@/assets/hero-device-gold.jpg";
import productKit from "@/assets/product-kit.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productMask from "@/assets/product-mask.jpg";

const events = [
  {
    id: 1,
    title: "NEW 앰플 3종 출시 기념 66% 할인!",
    subtitle: "12월 1일 새로워진 리필데이에서만!",
    date: "2024.12.01 - 2024.12.31",
    image: productKit,
    isActive: true,
    tag: "진행중",
  },
  {
    id: 2,
    title: "글로우 시그니처 5차 예약판매",
    subtitle: "한정수량 500대 완판 기념 이벤트",
    date: "2024.11.15 - 2024.11.30",
    image: productSerum,
    isActive: false,
    tag: "종료",
  },
  {
    id: 3,
    title: "회원 전용 30% 할인 이벤트",
    subtitle: "스마트 베일™ 글로우 실러 마스크 세트",
    date: "2024.11.01 - 2024.11.30",
    image: productMask,
    isActive: false,
    tag: "종료",
  },
  {
    id: 4,
    title: "런칭 1주년 기념 감사 이벤트",
    subtitle: "전 제품 20% 할인 + 사은품 증정",
    date: "2024.10.01 - 2024.10.31",
    image: heroGold,
    isActive: false,
    tag: "종료",
  },
];

const Event = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroGold})` }}
        >
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative h-full container mx-auto px-4 md:px-6 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              Special Offers
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground">
              이벤트
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Active Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              진행중인 이벤트
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {events
                .filter((e) => e.isActive)
                .map((event) => (
                  <Link
                    key={event.id}
                    to="#"
                    className="group block bg-warm-cream rounded-sm overflow-hidden shadow-soft hover:shadow-gold transition-shadow duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="aspect-video md:aspect-[4/3] overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <span className="inline-block w-fit px-3 py-1 text-xs font-medium bg-gold text-primary-foreground rounded mb-4">
                          {event.tag}
                        </span>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {event.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <Button
                          variant="goldOutline"
                          size="lg"
                          className="mt-6 w-fit group/btn"
                        >
                          자세히 보기
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>

          {/* Past Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              지난 이벤트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((e) => !e.isActive)
                .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      to="#"
                      className="block bg-secondary rounded-sm overflow-hidden"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded mb-2">
                          {event.tag}
                        </span>
                        <h3 className="text-base font-medium text-foreground mb-1 group-hover:text-gold transition-colors line-clamp-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                          {event.subtitle}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Event;
