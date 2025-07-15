import * as React from 'react';
import { motion } from 'framer-motion';

export default function Heading() {
  return (
    <>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ fontSize: '3rem' }}
      >
        Optimizing Resources. Maximizing Profit.
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <i>Unlock operational efficiency and drive profitability.</i>
      </motion.h3>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <i>Powered by data, discipline, and expert-led consulting at every step.</i>
      </motion.h3>
    </>
  );
}
