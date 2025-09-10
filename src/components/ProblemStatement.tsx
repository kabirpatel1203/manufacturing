
import React from 'react';
import { X, Check, PhoneCall, Mail, MessageSquare, Users, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemStatement = () => {
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
    <section className="relative py-16 overflow-hidden bg-white" id="problem">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div variants={itemVariants} className="section-tag">
            Why Most Manufacturers Struggle With Data
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="heading-lg text-convrt-dark-blue mb-6"
          >
            Scattered Spreadsheets vs. <br />
            <span className=" bg-convrt-text-gradient bg-clip-text text-transparent font-extrabold">Smart Dashboards</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-convrt-dark-blue/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            Most small manufacturers are drowning in data but starving for insights. The difference between struggling and thriving is having the right information at the right time.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Scattered Data Management */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-red-50 px-4 py-2 rounded-bl-2xl">
              <X className="w-5 h-5 text-[#EA384C]" />
            </div>
            
            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              Scattered Data Management
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">No informed decisions</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Guessing instead of knowing what's working</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Hours wasted on manual reports</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Time spent compiling instead of analyzing</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Reactive instead of proactive</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Finding problems after they've already cost money</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <PhoneCall className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Excel Hell</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <Mail className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Manual Reports</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <MessageSquare className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Guesswork</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#EA384C]"></div>
          </motion.div>
          
          {/* Smart Data Solutions */}
<motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-green-50 rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-green-100 px-4 py-2 rounded-bl-2xl">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            
            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              Smart Data Solutions
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-600 rounded-full">KabirData</span>
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Better informed decisions</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Real-time insights that drive action</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Increase revenue & efficiency</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Automated processes save time and money</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Proactive problem solving</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Catch issues before they become expensive</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-green-100 rounded-xl p-3">
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-sm text-center text-green-600 font-medium">Smart Dashboards</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-green-100 rounded-xl p-3">
                <Zap className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-sm text-center text-green-600 font-medium">Automation</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-green-100 rounded-xl p-3">
                <BarChart3 className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-sm text-center text-green-600 font-medium">Growth</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-green-600"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
