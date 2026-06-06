import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Bell, DollarSign, TrendingUp, Package, BarChart2, Zap, Bot, Clock } from 'lucide-react';
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
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const kpis = [
    {
      label: '3 Unprofitable Products',
      tone: 'text-red-600',
      iconBg: 'bg-red-50',
      tagBg: 'bg-red-50 text-red-600',
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      label: '5 Slipping Customers',
      tone: 'text-amber-600',
      iconBg: 'bg-amber-50',
      tagBg: 'bg-amber-50 text-amber-600',
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      label: '$12,400 Cash at Risk',
      tone: 'text-red-600',
      iconBg: 'bg-red-50',
      tagBg: 'bg-red-50 text-red-600',
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      label: '8 Reorder Alerts Due',
      tone: 'text-blue-600',
      iconBg: 'bg-blue-50',
      tagBg: 'bg-blue-50 text-blue-600',
      icon: <Bell className="w-4 h-4" />,
    },
  ];

  const profitBars = [
    { name: 'SKU-104', value: 88, profitable: true },
    { name: 'SKU-212', value: 72, profitable: true },
    { name: 'SKU-317', value: 64, profitable: false },
    { name: 'SKU-408', value: 81, profitable: true },
    { name: 'SKU-511', value: 58, profitable: false },
    { name: 'SKU-623', value: 76, profitable: true },
  ];

  const reorderItems = [
    {
      sku: 'SKU-317',
      days: 3,
      urgency: 'urgent',
      points: [22, 25, 28, 32, 38, 44, 51],
      stroke: '#EF4444',
    },
    {
      sku: 'SKU-104',
      days: 6,
      urgency: 'soon',
      points: [35, 42, 40, 55, 62, 70, 78],
      stroke: '#D97706',
    },
    {
      sku: 'SKU-408',
      days: 9,
      urgency: 'ok',
      points: [58, 61, 59, 65, 68, 71, 74],
      stroke: '#059669',
    },
    {
      sku: 'SKU-212',
      days: 11,
      urgency: 'ok',
      points: [68, 60, 63, 58, 54, 50, 46],
      stroke: '#059669',
    },
  ];

  const urgencyStyles: Record<string, string> = {
    urgent: 'bg-red-50 text-red-600',
    soon: 'bg-amber-50 text-amber-600',
    ok: 'bg-emerald-50 text-emerald-600',
  };

  return (
    <motion.div
      ref={statsRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-6"
    >
      {/* Dashboard Card */}
      <motion.div
        variants={itemVariants}
        className="rounded-2xl border border-slate-200 overflow-hidden bg-white w-[110%] -mx-[5%]"
      >
        {/* Header */}
        <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-0.5">
              Dashboard Mockup
            </div>
            <h3 className="text-[15px] font-medium text-white">
              Profit Clarity + Smart Reordering
            </h3>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/[0.12] px-3 py-1.5 text-xs text-white/70">
            <span className="h-[7px] w-[7px] rounded-full bg-emerald-400 animate-pulse" />
            Live Data
          </div>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4 bg-white">

          {/* KPI Cards */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${kpi.iconBg} ${kpi.tone}`}
                  >
                    {kpi.icon}
                  </div>
                  <span
                    className={`text-[10px] font-medium uppercase tracking-wide px-1.5 py-0.5 rounded ${kpi.tagBg}`}
                  >
                    Alert
                  </span>
                </div>
                <div className="text-[13px] font-medium text-slate-800 leading-snug">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid gap-4 md:grid-cols-2">

            {/* Bar Chart */}
            <div className="rounded-xl border border-slate-100 bg-white p-4">
              <div className="mb-3">
                <h4 className="text-[14px] font-medium text-slate-900">
                  Product profit vs revenue
                </h4>
                <p className="mt-0.5 text-xs text-slate-500">
                  Which products actually make you money
                </p>
              </div>
              <div className="flex items-end gap-2 h-36 mb-3">
                {profitBars.map((bar) => (
                  <div
                    key={bar.name}
                    className="flex-1 flex flex-col items-center justify-end gap-1.5 h-full"
                  >
                    <div className="w-full flex items-end justify-center" style={{ height: '100%' }}>
                      <div
                        className={`w-full max-w-[36px] rounded-t-md ${
                          bar.profitable ? 'bg-emerald-500' : 'bg-red-500'
                        }`}
                        style={{ height: `${bar.value}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {bar.name.replace('SKU-', '')}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Profitable
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  Losing money
                </span>
              </div>
            </div>

            {/* Reorder Intelligence */}
            <div className="rounded-xl border border-slate-100 bg-white p-4">
              <div className="mb-3">
                <h4 className="text-[14px] font-medium text-slate-900">
                  Reorder intelligence
                </h4>
                <p className="mt-0.5 text-xs text-slate-500">
                  AI-predicted reorder dates from your sales history
                </p>
              </div>
              <div className="space-y-2">
                {reorderItems.map((item) => (
                  <div
                    key={item.sku}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-800">
                        <Package className="h-3.5 w-3.5 text-slate-400" />
                        {item.sku}
                      </div>
                      <div
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                          urgencyStyles[item.urgency]
                        }`}
                      >
                        <Clock className="h-3 w-3" />
                        Reorder in {item.days} days
                      </div>
                    </div>
                    <div className="w-16 h-8 rounded-lg bg-white border border-slate-200 p-1.5 flex items-end">
                      <svg viewBox="0 0 96 40" className="h-full w-full">
                        <polyline
                          fill="none"
                          stroke={item.stroke}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={item.points
                            .map((p, i) => `${i * 16},${40 - p / 2}`)
                            .join(' ')}
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div variants={itemVariants}>
          <StatCard
            value=""
            description="Stop Guessing When to Reorder"
            icon={<BarChart2 className="w-8 h-8" />}
            footer="Know exactly when to restock every SKU based on your own sales history — never tie up cash in slow movers again."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            value=""
            description="Not All Sales Are Good Sales"
            icon={<Zap className="w-8 h-8" />}
            footer="Some customers cost you more than they pay. See exactly who's making you money and who isn't."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            value=""
            description="Ask Your Business Anything. Get Answers Instantly."
            icon={<Bot className="w-8 h-8" />}
            footer="No spreadsheets. No waiting. Just type your question and get the answer from your own company data."
          />
        </motion.div>
      </div>

    </motion.div>
  );
};

export default StatsSection;