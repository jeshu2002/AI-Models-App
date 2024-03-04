import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <motion.div
        className="bg-white rounded-lg p-8 shadow-md max-w-md w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold mb-4 text-center"
        >
          About Us
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg leading-relaxed mb-6 text-gray-700 text-center"
        >
          Kolluru Jeshwanth
          <br />
          2010110351<br />
          B-Tech Computer Science(2024)<br />
          Shiv Nadar University
        </motion.p>
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl font-bold mb-4 text-center"
        >
          About Website
        </motion.h2>

        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl font-bold text-center"
        >
          Comprehensive AI and LLM Information
        </motion.h2>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg leading-relaxed mb-2 text-gray-700 text-center"
        >
          The website provides detailed content on Artificial Intelligence and Large Language Models.

        </motion.p>

        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl font-bold  text-center"
        >
          Efficient Search Capability
        </motion.h2>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg leading-relaxed mb-2 text-gray-700 text-center"
        >
          Users can easily find specific information about AI and LLM models through search feature.

        </motion.p>


        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl font-bold  text-center"
        >
          Responsive Design
        </motion.h2>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg leading-relaxed  text-gray-700 text-center"
        >
          The website ensures a seamless user experience on various devices, including tablets, laptops, and phones.
        </motion.p>


        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl font-bold mb-4 mt-6 text-center"
        >
          Social Accounts
        </motion.h2>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-x-5 items-center justify-center"
        >
          <motion.a
            variants={textVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            className="text-lg text-blue-600 hover:text-blue-800"
            href="https://www.linkedin.com/in/jeshwanth-kolluru-566732202/"
            target="_blank"
          >
            <FaLinkedin className="h-7 w-7" />
          </motion.a>
          <motion.a
            variants={textVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            className="text-lg text-gray-800 hover:text-gray-900"
            href="https://github.com/jeshu2002?tab=repositories"
            target="_blank"
          >
            <FaGithub className="h-7 w-7" />
          </motion.a>
          <motion.a
            href="mailto:kk345@snu.edu.in"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            className="text-lg text-red-600 hover:text-red-800"
            target="_blank"
          >
            <MdEmail className="h-7 w-7" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
