import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroGold from "@/assets/hero-device-gold.jpg";
import heroBlue from "@/assets/hero-device-blue.jpg";

const slides = [
  {
    id: 1,
    image: heroGold,
    tag: "New",
    tagSecondary: "Device",
    title: "더 글로우 프로",
    subtitle: "런칭 라이브 500대 완판!",
    description: "더 나은 나를 위해 언제 어디서나 피부를 관리할 수 있도록 만들었습니다.",
    gradient: "bg-gradient-hero-gold",
  },
  {
    id: 2,
    image: heroBlue,
    tag: "New",
    tagSecondary: "Device",
    title: "더 글로우 시그니처",
    subtitle: "5차 예약까지 전량 완판!",
    description: "더 나은 나를 위해 언제 어디서나 피부를 관리할 수 있도록 만들었습니다.",
    gradient: "bg-gradient-hero-blue",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`absolute inset-0 ${slide.gradient}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 md:px-6 flex items-center">
            <div className="max-w-xl">
              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-2 mb-6"
              >
                <span className="px-3 py-1 text-xs font-medium border border-primary-foreground/50 text-primary-foreground rounded">
                  {slide.tag}
                </span>
                <span className="px-3 py-1 text-xs font-medium border border-primary-foreground/50 text-primary-foreground rounded">
                  {slide.tagSecondary}
                </span>
              </motion.div>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary-foreground/80 text-lg md:text-xl mb-2 font-body"
              >
                {slide.title}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
              >
                {slide.subtitle}
              </motion.h1>

              {/* Description - Desktop only */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="hidden md:block text-primary-foreground/70 text-base leading-relaxed mb-8 max-w-md"
              >
                {slide.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary-foreground"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
