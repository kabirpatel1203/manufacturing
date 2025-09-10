
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ProblemStatement from '@/components/ProblemStatement';
import CaseStudy from '@/components/CaseStudy';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Calendar, Clock } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-convrt-dark-blue overflow-hidden">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <ProblemStatement />
        <CaseStudy />
        <Testimonials />
        
        <section className="py-20 bg-convrt-dark-blue" id="consultation">
          <div className="container mx-auto max-w-4xl px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/20 text-convrt-purple mb-8">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium font-inter tracking-wide">Free 30-Minute Consultation</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform Your 
                <span className="text-convrt-purple font-extrabold"> Data Strategy</span>?
              </h2>
              
              <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
                Let's discuss how custom dashboards and automation can save your business time and drive better decisions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: <Clock className="w-6 h-6" />, title: "30 Minutes", desc: "Free consultation & demo" },
                  { icon: <Check className="w-6 h-6" />, title: "Custom Plan", desc: "Tailored to your needs" },
                  { icon: <ArrowRight className="w-6 h-6" />, title: "Get Started", desc: "Same week implementation" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-convrt-purple/20 flex items-center justify-center text-convrt-purple mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <motion.a
                href="https://calendly.com/kabirpatel-work/30min"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="button-primary inline-flex items-center text-xl px-10 py-5 shadow-lg shadow-convrt-purple/10 hover:shadow-xl hover:shadow-convrt-purple/20 rounded-full group"
              >
                Book Free Consultation & Demo
                <Calendar className="ml-2 w-6 h-6 transition-transform group-hover:scale-110" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0 flex items-center space-x-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-convrt-purple to-convrt-purple-hover flex items-center justify-center text-white font-bold">
                
              </div>
              <div>
                <h3 className="text-xl font-bold text-convrt-dark-blue">Kabir - Your Data Partner</h3>
                <p className="text-sm text-gray-600 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-8"
            >
              <a href="https://www.linkedin.com/in/kabir-patel1203/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-convrt-purple transition-colors">LinkedIn</a>
              <a href="#consultation" className="text-gray-600 hover:text-convrt-purple transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
