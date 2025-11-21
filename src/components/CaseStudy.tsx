// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, CheckCircle } from 'lucide-react';

// const CaseStudy = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
//     }
//   };

//   return (
//     <section className="relative py-16 overflow-hidden bg-gray-50" id="case-study">
//       <div className="container-section relative z-10">
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="max-w-5xl mx-auto"
//         >
//           <motion.div 
//             variants={itemVariants}
//             className="text-center mb-12"
//           >
//             <h2 className="heading-lg text-convrt-dark-blue mb-6">
//               Real Results: PlasticoRub Case Study
//             </h2>
//             <p className="text-convrt-dark-blue/80 text-lg max-w-3xl mx-auto">
//               See how we helped an injection molding company:
//             </p>
//           </motion.div>

//           <motion.div 
//             variants={itemVariants}
//             className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[32px] border border-gray-200 shadow-xl overflow-hidden p-10"
//           >
//             <div className="max-w-3xl mx-auto">
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start">
//                   <CheckCircle className="w-6 h-6 text-convrt-purple mt-1 mr-4 flex-shrink-0" />
//                   <span className="text-gray-800 text-lg">Eliminate 3 stockouts per month (saving $8K-$12K in rush fees)</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="w-6 h-6 text-convrt-purple mt-1 mr-4 flex-shrink-0" />
//                   <span className="text-gray-800 text-lg">Reduce excess inventory by 22%</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="w-6 h-6 text-convrt-purple mt-1 mr-4 flex-shrink-0" />
//                   <span className="text-gray-800 text-lg">Catch slipping accounts before they churn</span>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="w-6 h-6 text-convrt-purple mt-1 mr-4 flex-shrink-0" />
//                   <span className="text-gray-800 text-lg">Cut reorder decisions from 3 hours to 10 minutes per week</span>
//                 </div>
//               </div>

//               {/* <div className="flex justify-center">
//                 <motion.a
//                   href="https://drive.google.com/file/d/1I_szpzZp9bjIwJT6SKT-fXu1vl8w__m5/view?usp=sharing"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-convrt-purple text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   Read Full Case Study
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </motion.a>
//               </div> */}

//               <div className="flex justify-center">
//               <motion.a
//                 href="https://drive.google.com/file/d/1I_szpzZp9bjIwJT6SKT-fXu1vl8w__m5/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-convrt-purple text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 Read Full Case Study
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </motion.a>
//             </div>

//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudy;


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const DOC_URL = 'https://drive.google.com/file/d/1I_szpzZp9bjIwJT6SKT-fXu1vl8w__m5/view?usp=sharing';

const CaseStudy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gray-50" id="case-study">
      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-lg text-convrt-dark-blue mb-6">
              Real Results: PlasticoRub Case Study
            </h2>
            <p className="text-convrt-dark-blue/80 text-lg max-w-3xl mx-auto">
              See how we helped an injection molding company:
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[32px] border border-gray-200 shadow-xl overflow-hidden p-10"
          >
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-convrt-purple mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 text-lg">Eliminate 3 stockouts per month (saving $8K-$12K in rush fees)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-convrt-purple mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 text-lg">Reduce excess inventory by 22%</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-convrt-purple mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 text-lg">Catch slipping accounts before they churn</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-convrt-purple mt-1 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 text-lg">Cut reorder decisions from 3 hours to 10 minutes per week</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center relative z-[9999] isolate">
                <motion.a
                  href={DOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-convrt-purple text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                  // Stop parents from hijacking the click
                  onPointerDownCapture={(e) => {
                    e.stopPropagation();
                  }}
                  onClickCapture={(e) => {
                    // Prevent any ancestor onClick from preventing navigation
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    // If something prevents default navigation, force-open the tab
                    // This still counts as a user gesture, so popup blockers allow it.
                    try {
                      window.open(DOC_URL, '_blank', 'noopener,noreferrer');
                    } catch {}
                    // We purposely do NOT preventDefault unless you want to rely solely on window.open
                    // e.preventDefault();
                  }}
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;

