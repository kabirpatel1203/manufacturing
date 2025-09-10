
import React from 'react';
import { motion } from 'framer-motion';
import PowerBIDashboard from './PowerBIDashboard';

const PlatformDemo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative mx-auto max-w-6xl"
    >
      <PowerBIDashboard />
    </motion.div>
  );
};

export default PlatformDemo;
