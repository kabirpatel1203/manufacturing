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
          value=""
          description="Stop Stockouts & Protect Margins"
          icon={<BarChart2 className="w-8 h-8" />}
          footer="Get daily reorder alerts and see which customers and products truly drive profit"
        />
      </motion.div>

      {/* Stat 2 - Automation */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <StatCard
          value=""
          description="Eliminate Guesswork in Inventory Decisions"
          icon={<Zap className="w-8 h-8" />}
          footer="Automated reorder points by SKU from your past sales + lead times—stop tying up cash in slow movers"
        />
      </motion.div>

      {/* Stat 3 - Database Bots */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <StatCard
          value=""
          description="Instant Insights via Interactive Database Bots"
          icon={<Bot className="w-8 h-8" />}
          footer="Get answers to your data questions instantly"
        />
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
