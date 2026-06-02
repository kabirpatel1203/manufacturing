import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Bell, DollarSign, TrendingUp, Package } from 'lucide-react';

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

  const kpis = [
    {
      label: '3 Unprofitable Products',
      tone: 'text-red-600',
      bg: 'bg-red-50',
      icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
      label: '5 Slipping Customers',
      tone: 'text-orange-600',
      bg: 'bg-orange-50',
      icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
      label: '$12,400 Cash at Risk',
      tone: 'text-red-600',
      bg: 'bg-red-50',
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      label: '8 Reorder Alerts Due',
      tone: 'text-blue-600',
      bg: 'bg-blue-50',
      icon: <Bell className="w-5 h-5" />,
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
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="bg-[#2C3E50] px-6 py-4 text-white flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/60">Dashboard Mockup</div>
            <h3 className="text-lg font-semibold">Profit Clarity + Smart Reordering</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Live Data
          </div>
        </div>

        <div className="p-6 space-y-6 bg-slate-50/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${kpi.bg} ${kpi.tone}`}>
                    {kpi.icon}
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wide ${kpi.tone}`}>Alert</span>
                </div>
                <div className="text-lg font-semibold text-slate-900 leading-tight">{kpi.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-slate-900">Product Profit vs Revenue</h4>
                <p className="mt-1 text-sm text-slate-600">See which products actually make you money</p>
              </div>

              <div className="h-96 rounded-2xl bg-slate-50 px-4 py-4 flex items-end gap-3 border border-slate-100">
                {profitBars.map((bar) => (
                  <div key={bar.name} className="flex-1 flex flex-col items-center justify-end gap-2">
                    <div className="w-full flex items-end justify-center h-80">
                      <div
                        className={`w-full max-w-[42px] rounded-t-xl ${bar.profitable ? 'bg-emerald-500' : 'bg-red-500'}`}
                        style={{ height: `${bar.value}%` }}
                      />
                    </div>
                    <div className="text-xs font-medium text-slate-600">{bar.name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-emerald-500" />Profitable</span>
                <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-500" />Losing money</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-slate-900">Reorder Intelligence</h4>
                <p className="mt-1 text-sm text-slate-600">AI-predicted reorder dates based on your sales history</p>
              </div>

              <div className="space-y-4">
                {reorderItems.map((item) => (
                  <div key={item.sku} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-slate-900 font-semibold">
                          <Package className="h-4 w-4 text-slate-500" />
                          {item.sku}
                        </div>
                        <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                          <TrendingUp className="h-3.5 w-3.5" />
                          Reorder in {item.days} days
                        </div>
                      </div>

                      <div className="w-24 h-12 rounded-xl bg-white border border-slate-200 p-2 flex items-end">
                        <svg viewBox="0 0 100 40" className="h-full w-full">
                          <polyline
                            fill="none"
                            stroke="#0F172A"
                            strokeOpacity="0.35"
                            strokeWidth="2.5"
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

          <div className="rounded-2xl bg-[#2C3E50] px-5 py-4 text-white flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">Know exactly which products and customers make you money — and when to reorder</div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80 whitespace-nowrap">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Live Data
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
