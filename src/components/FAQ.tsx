import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "Is there a contract?",
      answer: "No. Cancel anytime. We're confident you'll see the value."
    },
    {
      question: "What if my data is messy?",
      answer: "We'll work with what you have. Most manufacturers' data is messier than they think - we handle it."
    },
    {
      question: "How long does setup take?",
      answer: "7 days from our kickoff call to your AI-powered dashboard being live."
    },
    {
      question: "What if I need changes later?",
      answer: "Minor tweaks are included for free. We want you to keep loving the product as your business evolves."
    },
    {
      question: "Can I see a demo first?",
      answer: "Yes! Book a free 30-minute call and we'll show you examples."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-lg text-convrt-dark-blue mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-convrt-purple/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-convrt-dark-blue mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-lg text-convrt-dark-blue/80">
                  A: {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
