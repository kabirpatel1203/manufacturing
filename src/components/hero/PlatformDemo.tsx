
import React from 'react';
import { motion } from 'framer-motion';

const PlatformDemo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative mx-auto max-w-6xl"
    >
      <div className="bg-white rounded-[20px] border border-gray-200 p-8 text-center shadow-sm">
        <h3 className="text-lg font-semibold">Demo removed</h3>
        <p className="text-sm text-gray-600 mt-2">The old dashboard has been removed. Contact us to schedule a live demo.</p>
      </div>
    </motion.div>
  );
};

export default PlatformDemo;
