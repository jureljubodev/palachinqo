import { motion } from "framer-motion";
import React from "react";

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
