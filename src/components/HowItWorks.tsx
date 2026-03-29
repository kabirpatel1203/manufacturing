import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Gauge, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "We Talk About Your Business",
      description: "You tell me how your factory runs – products, orders, costs, and what you want to see clearly (profits, delays, wastage, etc.)."
    },
    {
      number: "2",
      icon: Database,
      title: "I Connect to Your Existing Data",
      description: "You don't change anything. I securely pull data from tools you already use like QuickBooks, Excel, ERP, or any other software."
    },
    {
      number: "3",
      icon: Gauge,
      title: "I Build Your AI-Powered Dashboard (in 7 Days)",
      description: "I design a simple, AI-powered visual dashboard just for your manufacturing business – focused on production, costs, margins, and inventory."
    },
    {
      number: "4",
      icon: TrendingUp,
      title: "You Use It Every Day",
      description: "The dashboard updates automatically every day with your latest data, so you can:",
      bullets: [
        "See what's really happening in your factory",
        "Spot problems early",
        "Make faster, profit-focused decisions"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative py-20 overflow-hidden bg-white" id="how-it-works">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="heading-lg text-convrt-dark-blue mb-6"
          >
            How It Works
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-convrt-dark-blue/80 text-lg"
          >
            Simple 4-Step Process
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto space-y-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-white rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-convrt-purple to-convrt-purple-hover flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-convrt-dark-blue text-white flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="heading-sm text-convrt-dark-blue mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-convrt-dark-blue/70 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    
                    {step.bullets && (
                      <ul className="space-y-2 mt-4">
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-convrt-purple mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-convrt-dark-blue/70">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl font-semibold text-convrt-dark-blue">
            No IT team. No setup. You run your factory — I turn your data into daily insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
