// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto mt-4 p-8">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg"
        >
          Kolluru Jeshwanth
          <br/>
          2010110351<br/>
          B-Tech Computer Science(2024)<br/>
          Shiv Nadar University
        </motion.p>
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-4 mt-3 "
        >
          Social Accounts
        </motion.h2>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-x-5 items-center"
        >
          <motion.a
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg"
            href="https://www.linkedin.com/in/jeshwanth-kolluru-566732202/"
            target="_blank"
          >
            <FaLinkedin className="h-7 w-7 " />
          </motion.a>
          <motion.a
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg"
            href="https://github.com/jeshu2002?tab=repositories"
            target="_blank"
          >
            <FaGithub className="h-7 w-7 " />
          </motion.a>
          <motion.a
        href = "mailto:kk345@snu.edu.in"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg"
            
            target="_blank"
          >
            <MdEmail className="h-7 w-7" />
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
