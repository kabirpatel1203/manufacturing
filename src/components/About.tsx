import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-convrt-purple" />,
      stat: "4+",
      label: "Years Experience"
    },
    {
      icon: <Users className="w-8 h-8 text-convrt-purple" />,
      stat: "6+",
      label: "Companies Helped"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-convrt-purple" />,
      stat: "70%",
      label: "Average Time Saved"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 bg-convrt-text-gradient bg-clip-text text-transparent mb-6">
              <span className="text-sm font-medium font-inter tracking-wide">👋 Meet Your Data Partner</span>
            </div>
            
            <h2 className="heading-lg text-convrt-dark-blue mb-6">
              I'm <span className="bg-convrt-text-gradient bg-clip-text text-transparent font-extrabold">Kabir</span> — Your Data Partner
            </h2>
            
            <div className="space-y-6 text-lg text-convrt-dark-blue/80 leading-relaxed">
              <p>
                I’m a data analytics expert with hands-on experience helping small plastic and rubber manufacturers optimize operations and increase profits. I turn your existing data into clear, actionable insights - so you can make decisions with confidence.
              </p>
              
              <p>
                I have worked in Data and AI field with companies like <strong>Dell, Inhealth, Cal State Long Beach, Servtech Plastics</strong> and many more which equipped me to improve business outcomes through data.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <a 
                href="https://www.linkedin.com/in/kabir-patel1203/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-flex items-center px-6 py-3  text-white rounded-lg hover:bg-[#005885] transition-all hover:scale-105 font-medium"
              >
                Connect on LinkedIn
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-convrt-dark-blue mb-2">
                    {achievement.stat}
                  </div>
                  <div className="text-sm text-convrt-dark-blue/70 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trusted By */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-convrt-dark-blue mb-6 text-center">
                Trusted by Industry Leaders
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="font-semibold text-convrt-dark-blue">Manufacturing</div>
                  <div className="text-sm text-convrt-dark-blue/70">Plastics & Rubber</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="font-semibold text-convrt-dark-blue">Technology</div>
                  <div className="text-sm text-convrt-dark-blue/70">Dell, Inhealth</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="font-semibold text-convrt-dark-blue">Education</div>
                  <div className="text-sm text-convrt-dark-blue/70">Cal State Long Beach</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="font-semibold text-convrt-dark-blue">Small Businesses</div>
                  <div className="text-sm text-convrt-dark-blue/70">6+ Companies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;