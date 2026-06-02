import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Bell, DollarSign, TrendingUp, Package, BarChart2, Zap, Bot } from 'lucide-react';
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
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  };

  const kpis = [
    {
      label: '3 Unprofitable Products',
      tone: 'text-rose-600',
      bg: 'bg-rose-50/70 border-rose-100',
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      label: '5 Slipping Customers',
      tone: 'text-amber-600',
      bg: 'bg-amber-50/70 border-amber-100',
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      label: '$12,400 Cash at Risk',
      tone: 'text-rose-600',
      bg: 'bg-rose-50/70 border-rose-100',
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      label: '8 Reorder Alerts Due',
      tone: 'text-sky-600',
      bg: 'bg-sky-50/70 border-sky-100',
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
    { sku: 'SKU-104', days: 6, points: [35, 42, 40, 55, 62, 70, 78] },
    { sku: 'SKU-212', days: 11, points: [68, 60, 63, 58, 54, 50, 46] },
    { sku: 'SKU-317', days: 3, points: [22, 25, 28, 32, 38, 44, 51] },
    { sku: 'SKU-408', days: 9, points: [58, 61, 59, 65, 68, 71, 74] },
  ];

  return (
    <motion.div
      ref={statsRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-0"
    >
      {/* Main Dashboard Wrapper */}
      <motion.div 
        variants={itemVariants} 
        className="border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100/50 overflow-hidden rounded-3xl shadow-md pb-20"
      >
        {/* Dashboard Header */}
        <div className="bg-slate-900 px-8 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Live Workspace</div>
            <h3 className="text-xl font-medium tracking-tight mt-0.5">Profit Clarity &amp; Reordering</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 text-xs text-slate-300 border border-slate-700">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            System Synced
          </div>
        </div>

        {/* Dashboard Canvas Area */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className={`rounded-xl border ${kpi.bg} p-4 transition-all duration-200 hover:shadow-sm`}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ${kpi.tone}`}>
                    {kpi.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 border ${kpi.tone} opacity-80`}>
                    Action Required
                  </span>
                </div>
                <div className="text-base font-semibold text-slate-800 tracking-tight leading-tight">{kpi.label}</div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Profit Bar Chart */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-950 tracking-tight">Product Profit vs Revenue</h4>
                <p className="mt-0.5 text-xs text-slate-500">Visualizing high-yield SKUs against structural loss-makers.</p>
              </div>
              <div className="h-80 rounded-xl bg-slate-50/50 px-4 py-4 flex items-end gap-3 border border-slate-100">
                {profitBars.map((bar) => (
                  <div key={bar.name} className="flex-1 flex flex-col items-center justify-end gap-2 h-full">
                    <div className="w-full flex items-end justify-center h-full pb-1">
                      <div
                        className={`w-full max-w-[36px] rounded-t-md transition-all duration-500 hover:opacity-90 ${
                          bar.profitable ? 'bg-emerald-400/90 shadow-sm shadow-emerald-100' : 'bg-rose-400/90 shadow-sm shadow-rose-100'
                        }`}
                        style={{ height: `${bar.value}%` }}
                      />
                    </div>
                    <div className="text-[11px] font-medium text-slate-400">{bar.name}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 px-1">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Net Profitable
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-400" /> Capital Bleed
                </span>
              </div>
            </div>

            {/* Reorder Intelligence */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-950 tracking-tight">Predictive Reordering</h4>
                <p className="mt-0.5 text-xs text-slate-500">Automated restock pacing compiled from velocity metrics.</p>
              </div>
              <div className="space-y-3.5">
                {reorderItems.map((item) => (
                  <div key={item.sku} className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 transition-colors hover:bg-slate-50">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                          <Package className="h-4 w-4 text-slate-400" />
                          {item.sku}
                        </div>
                        <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700 border border-sky-100">
                          <TrendingUp className="h-3 w-3" />
                          Restock in {item.days} days
                        </div>
                      </div>
                      <div className="w-24 h-10 rounded-lg bg-white border border-slate-100 p-1 flex items-end">
                        <svg viewBox="0 0 100 40" className="h-full w-full">
                          <polyline
                            fill="none"
                            stroke="#0ea5e9"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points={item.points.map((point, index) => `${index * 16},${40 - point / 2}`).join(' ')}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* 3 Feature Cards — Flowing seamlessly out of the container above */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-8 -mt-12 relative z-10">
        <motion.div variants={itemVariants} className="flex h-full">
          <StatCard
            value=""
            description="Smart Velocity Restocking"
            icon={<BarChart2 className="w-6 h-6 text-slate-700" />}
            footer="Know exactly when to restock every SKU based on your real velocity trends. Avoid frozen assets in dust-collecting items."
            className="shadow-xl bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex h-full">
          <StatCard
            value=""
            description="Contribution Margin Audit"
            icon={<Zap className="w-6 h-6 text-slate-700" />}
            footer="Not all volume is healthy. Identify hidden overhead costs and instantly see who is contributing to real margin gains."
            className="shadow-xl bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex h-full">
          <StatCard
            value=""
            description="Natural Language Analytics"
            icon={<Bot className="w-6 h-6 text-slate-700" />}
            footer="Ditch manual reporting formulas. Type any prompt to safely isolate, parse, and graph your cross-channel stack instantly."
            className="shadow-xl bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between"
          />
        </motion.div>
      </div>

    </motion.div>
  );
};

export default StatsSection;