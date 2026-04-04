import React from 'react';
import { motion } from 'framer-motion';
import { X, BarChart3, Zap, MessageSquare } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'dashboards' | 'automation' | 'chatbot';
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, serviceType }) => {
  if (!isOpen) return null;

  const serviceContent = {
    dashboards: {
      icon: BarChart3,
      title: "Dashboards That Tell Your Story",
      problem: {
        title: "Problem (as executives feel it):",
        points: [
          "Leadership often relies on scattered spreadsheets, emails, and verbal updates to know what's happening.",
          "By the time data is pulled together, it's already outdated.",
          "Executives spend too much time asking \"Where do we stand today?\""
        ]
      },
      solution: {
        title: "Solution:",
        points: [
          "A single dashboard that pulls production, sales, scrap rates, and profitability into one real-time view.",
          "Interactive filtering → see performance by shift, product line, or plant.",
          "Accessible on any device, so you always know what's happening."
        ]
      },
      outcome: {
        title: "Outcome for Executives:",
        points: [
          "Decisions based on facts, not guesses.",
          "Faster daily stand-ups (everyone looks at the same live data).",
          "Ability to spot issues early instead of after they become expensive."
        ]
      },
      color: "blue"
    },
    automation: {
      icon: Zap,
      title: "Automate the Boring Stuff",
      problem: {
        title: "Problem:",
        points: [
          "Staff spend hours each week compiling production reports, emailing updates, and re-entering data into multiple systems.",
          "It's boring, error-prone, and pulls them away from higher-value tasks.",
          "Executives see delays and hidden labor costs."
        ]
      },
      solution: {
        title: "Solution:",
        points: [
          "Generate and email daily production/sales reports automatically.",
          "Sync data between systems without manual entry.",
          "Alert the right person when a KPI goes out of range."
        ]
      },
      outcome: {
        title: "Outcome for Executives:",
        points: [
          "60% less manual work for staff.",
          "Fewer mistakes and faster cycle times.",
          "Leadership can trust numbers without worrying about human error."
        ]
      },
      color: "purple"
    },
    chatbot: {
      icon: MessageSquare,
      title: "Ask Your Data Anything",
      problem: {
        title: "Problem:",
        points: [
          "Executives often have urgent questions like: \"What was yesterday's scrap rate?\" or \"How much did we ship this month compared to last?\"",
          "Getting answers requires waiting on staff to pull data, which can take hours or days.",
          "Critical decisions get delayed while waiting for simple data points."
        ]
      },
      solution: {
        title: "Solution:",
        points: [
          "A database chatbot that lets leadership type (or speak) a plain-English question like \"Show me downtime by machine for last week.\"",
          "Instantly returns the right answer, chart, or report.",
          "Works 24/7 — like having a data analyst on demand."
        ]
      },
      outcome: {
        title: "Outcome for Executives:",
        points: [
          "Immediate access to insights.",
          "Faster decision-making in meetings.",
          "Reduced reliance on already busy staff."
        ]
      },
      color: "green"
    }
  };

  const content = serviceContent[serviceType];
  const Icon = content.icon;

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          icon: 'text-blue-600',
          border: 'border-blue-200'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          icon: 'text-purple-600',
          border: 'border-purple-200'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          icon: 'text-green-600',
          border: 'border-green-200'
        };
      default:
        return {
          bg: 'bg-gray-50',
          icon: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  const colors = getColorClasses(content.color);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className={`${colors.bg} p-6 border-b ${colors.border}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center border ${colors.border}`}>
                <Icon className={`w-6 h-6 ${colors.icon}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{content.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Before/After Diagram */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Before vs After</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-red-800 mb-3 text-center">Before: Confusion</h4>
                <div className="space-y-2">
                  {serviceType === 'dashboards' && (
                    <>
                      <div className="bg-white p-3 rounded border text-sm">📊 Spreadsheet 1</div>
                      <div className="bg-white p-3 rounded border text-sm">📧 Email Updates</div>
                      <div className="bg-white p-3 rounded border text-sm">📊 Spreadsheet 2</div>
                      <div className="bg-white p-3 rounded border text-sm">📞 Verbal Reports</div>
                    </>
                  )}
                  {serviceType === 'automation' && (
                    <>
                      <div className="bg-white p-3 rounded border text-sm">👨‍💼 Manual Entry</div>
                      <div className="bg-white p-3 rounded border text-sm">📊 Compile Reports</div>
                      <div className="bg-white p-3 rounded border text-sm">📧 Email Updates</div>
                      <div className="bg-white p-3 rounded border text-sm">🔄 Re-enter Data</div>
                    </>
                  )}
                  {serviceType === 'chatbot' && (
                    <>
                      <div className="bg-white p-3 rounded border text-sm">👨‍💼 Executive Question</div>
                      <div className="bg-white p-3 rounded border text-sm">📞 Call Staff</div>
                      <div className="bg-white p-3 rounded border text-sm">🔍 Dig Through Files</div>
                      <div className="bg-white p-3 rounded border text-sm">⏰ Wait Hours/Days</div>
                    </>
                  )}
                </div>
              </div>

              {/* After */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 mb-3 text-center">After: Clarity</h4>
                <div className="space-y-2">
                  {serviceType === 'dashboards' && (
                    <div className="bg-white p-6 rounded border">
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-2">📊 Unified Dashboard</div>
                        <div className="text-sm text-gray-600">Real-time data • Any device • Always current</div>
                      </div>
                    </div>
                  )}
                  {serviceType === 'automation' && (
                    <div className="bg-white p-6 rounded border">
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-2">⚡ Automated Flow</div>
                        <div className="text-sm text-gray-600">Auto reports • Sync systems • Smart alerts</div>
                      </div>
                    </div>
                  )}
                  {serviceType === 'chatbot' && (
                    <div className="bg-white p-6 rounded border">
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-2">🤖 Instant Answers</div>
                        <div className="text-sm text-gray-600">Type question • Get chart • 24/7 available</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Problem, Solution, Outcome */}
          <div className="space-y-6">
            {/* Problem */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-red-600">{content.problem.title}</h3>
              <ul className="space-y-2">
                {content.problem.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-600">{content.solution.title}</h3>
              <ul className="space-y-2">
                {content.solution.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">{content.outcome.title}</h3>
              <ul className="space-y-2">
                {content.outcome.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-4">Let's discuss how this solution can transform your business.</p>
            <a
              href="https://calendly.com/kabirpatel-work/25min"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center"
            >
              Book Free AI Dashboard Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceModal;