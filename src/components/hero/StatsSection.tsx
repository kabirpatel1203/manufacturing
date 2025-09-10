import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Zap, Bot } from 'lucide-react';
import StatCard from './StatCard';

interface StatsSectionProps {
  statsRef: React.RefObject<HTMLDivElement>;
}

const StatsSection: React.FC<StatsSectionProps> = ({ statsRef }) => {
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
    <motion.div
      ref={statsRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {/* Stat 1 - Dashboards */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <StatCard
          value="70%"
          description="Faster Reporting with Real-Time Dashboards"
          icon={<BarChart2 className="w-8 h-8" />}
          className="h-full flex justify-center"
        />
      </motion.div>

      {/* Stat 2 - Automation */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <StatCard
          value="60%"
          description="Reduce Manual Work Using Workflow Automation"
          icon={<Zap className="w-8 h-8" />}
          className="h-full"
        />
      </motion.div>

      {/* Stat 3 - Database Bots */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <StatCard
          value="100%"
          description="Instant Insights via Interactive Database Bots"
          icon={<Bot className="w-8 h-8" />}
          className="h-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
