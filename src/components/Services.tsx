import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Zap, MessageSquare, ArrowRight } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: BarChart3,
      title: "Dashboards That Tell Your Story",
      description: "Get real-time insights into production, sales, and KPIs — all in one place. No more scattered spreadsheets.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Automate the Boring Stuff",
      description: "Reduce manual reporting and streamline operations with custom-built automation that saves hours every week.",
      color: "purple"
    },
    {
      icon: MessageSquare,
      title: "Ask Your Data Anything",
      description: "Query your database in plain English and get instant answers. Like having a data analyst on speed dial.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          icon: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          icon: 'text-purple-600',
          button: 'bg-purple-600 hover:bg-purple-700'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          icon: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          icon: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-white" id="services">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="heading-lg text-convrt-dark-blue mb-6"
          >
            Three Ways I Transform Your Business
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-convrt-dark-blue/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            Simple, powerful solutions designed specifically for small manufacturers who need results, not complexity.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`${colors.bg} rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group transition-all duration-300`}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="heading-sm text-convrt-dark-blue mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-convrt-dark-blue/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <button className={`${colors.button} text-white px-6 py-3 rounded-lg font-medium flex items-center group transition-all duration-300 hover:shadow-lg`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4">
                    <Icon className="w-32 h-32 text-gray-900" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;