import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import heroGold from "@/assets/hero-device-gold.jpg";
import heroBlue from "@/assets/hero-device-blue.jpg";
import productDevice from "@/assets/product-device.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroGold})` }}
        >
          <div className="absolute inset-0 bg-dark/50" />
        </div>
        <div className="relative h-full container mx-auto px-4 md:px-6 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              About Glowing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
              We created so that those who aim for a 'better me' can take care
              of their skin anytime, anywhere.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold text-sm tracking-widest uppercase mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                더 나은 나를 위한 홈케어
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                글로잉은 '더 나은 나'를 목표로 하는 분들이 언제 어디서나 피부를
                관리할 수 있도록 만들어졌습니다. 우리는 에스테틱 전문가들의
                노하우를 집에서 경험할 수 있도록, 최고 품질의 홈케어 솔루션을
                제공합니다.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                우리의 시그니처 케어 리추얼은 에스테틱 프로그램에 대한 세심한
                탐구에 뿌리를 두고 있습니다. 과학적인 연구와 전문가의 경험을
                결합하여, 효과적이면서도 사용하기 편리한 제품을 개발합니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={productDevice}
                alt="Our Mission"
                className="w-full rounded-sm shadow-gold"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-warm-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              우리가 추구하는 가치
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                subtitle: "혁신",
                description:
                  "최신 기술과 과학적 연구를 바탕으로 효과적인 홈케어 솔루션을 개발합니다.",
              },
              {
                title: "Quality",
                subtitle: "품질",
                description:
                  "엄격한 품질 관리를 통해 최고 수준의 제품만을 고객에게 제공합니다.",
              },
              {
                title: "Care",
                subtitle: "케어",
                description:
                  "고객 한 분 한 분의 피부 고민을 이해하고, 맞춤형 솔루션을 제안합니다.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-sm shadow-soft text-center"
              >
                <h3 className="text-2xl font-display font-bold text-gold mb-2">
                  {value.title}
                </h3>
                <p className="text-lg text-foreground font-medium mb-4">
                  {value.subtitle}
                </p>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-dark text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src={heroBlue}
                alt="Our Vision"
                className="w-full rounded-sm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <p className="text-gold text-sm tracking-widest uppercase mb-4">
                Our Vision
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Signature Care of Aesthetic Programs
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-6">
                우리의 비전은 모든 사람이 전문적인 에스테틱 케어를 집에서
                경험할 수 있게 하는 것입니다. 시간과 장소의 제약 없이, 자신의
                속도로 아름다움을 가꿀 수 있는 세상을 만들어 갑니다.
              </p>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed">
                프라이빗 케어 루틴을 통해 자신만의 속도로 축적해 가는 고유한
                흐름, 그 확실한 변화의 힘을 경험하세요.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
