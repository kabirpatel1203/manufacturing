import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const SimplePricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white" id="pricing">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="heading-lg text-convrt-dark-blue mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-convrt-dark-blue/80 text-xl">
              Custom solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-convrt-purple to-convrt-purple-hover rounded-[32px] p-12 text-white shadow-2xl max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <div className="text-5xl font-bold mb-2">Starting at $99</div>
              {/* <div className="text-xl text-white/90"></div> */}
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-center">
                <Check className="w-6 h-6 mr-3 flex-shrink-0" />
                <span className="text-lg">Custom dashboard design</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-6 h-6 mr-3 flex-shrink-0" />
                <span className="text-lg">Automated reporting</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-6 h-6 mr-3 flex-shrink-0" />
                <span className="text-lg">Real-time data integration</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-6 h-6 mr-3 flex-shrink-0" />
                <span className="text-lg">Ongoing support & updates</span>
              </div>
            </div>

            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-convrt-purple px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimplePricing;
