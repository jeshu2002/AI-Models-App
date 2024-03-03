// src/HomePage.jsx
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import "./home.css";
const HomePage = () => {
  return (
    <div className="bg-gray-100 bg-image flex flex-col pt-56 overflow-hidden items-center justify-center px-4 h-screen">
      <section
        id="home"
        className="mb-28  text-white max-w-[50rem] text-center h-screen  justify-center sm:mb-0 scroll-mt-[100rem]"
      >
        <motion.h1
          className=" mt-4 mb-3  px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-bold">Welcome to</span>

          <span className="font-bold"> AI Models App</span>
          <br />
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 ,delay: 0.2}}
          className="mb-3 font-semibold"
        >
          Explore the Innovation: Unveiling a Spectrum of AI Models Crafted by
          Leading Organizations

        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5 ,delay: 0.4,}}
        >
          <a
            href="/models"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          >
            Serach Models{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
