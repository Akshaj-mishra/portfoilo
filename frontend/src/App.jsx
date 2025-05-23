import React from "react";
import { motion } from "framer-motion";
import Nav from "./component/Nav";
import Hero from "./pages/Hero";
import Edu from "./pages/Edu";
import Res from "./pages/Res";
import Cont from "./pages/Cont";
import "./index.css";
import Down from "./pages/Down";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto h-screen">
      <Nav />
      <section id="hero">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Hero />
        </motion.div>
      </section>

      <section id="education">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Edu />
        </motion.div>
      </section>

      <section id="resume">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Res />
        </motion.div>
      </section>

      <section id="contact">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Cont />
        </motion.div>
      </section>

      <section id="download">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Down />
        </motion.div>
      </section>
    </div>
  );
}

export default App;
