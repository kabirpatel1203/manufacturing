import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Clock, BarChart3 } from 'lucide-react';

const CaseStudy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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
    <section className="relative py-16 overflow-hidden bg-gray-50" id="case-study">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-convrt-dark-blue mb-6">
              How Servtech Plastics Reduced Reporting Time by 70%
            </h2>
            <p className="text-convrt-dark-blue/80 text-lg max-w-3xl mx-auto">
              Servtech Plastics struggled with manual reporting and scattered data across multiple systems.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-[24px] border border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              {/* Left side - Challenge */}
              <div className="p-8 bg-red-50">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Manual data collection from 5 different systems, taking 15+ hours per week just to create basic reports.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Scattered data across multiple systems</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Manual report compilation every week</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">No real-time visibility into operations</span>
                  </div>
                </div>
              </div>

              {/* Right side - Solution */}
              <div className="p-8 bg-green-50">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I built a custom dashboard and automated their daily reports — helping them save 15+ hours per week.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Unified dashboard with real-time data</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Automated daily and weekly reports</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Production metrics in real-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results section */}
            <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-convrt-purple mr-3" />
                    <h4 className="text-xl font-semibold text-gray-900">Results</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-convrt-purple mb-1">70%</div>
                      <div className="text-gray-700">Reduction in reporting time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-convrt-purple mb-1">15+</div>
                      <div className="text-gray-700">Hours saved per week</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-convrt-purple mb-1">100%</div>
                      <div className="text-gray-700">Real-time visibility</div>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-convrt-purple text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  See More Success Stories
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;