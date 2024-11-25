"use client"
import Intro from "./_components/Intro/Intro"
import Projects from "./_components/Projects/Projects"
import { motion } from "framer-motion"

const initial = { opacity: 0, y: 100 }
const animate = { opacity: 1, y: 0 }

export default function Home() {
  return (
    <>
      <motion.div initial={initial} animate={animate}>
        <Intro />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ delay: 0.4 }}
      >
        <Projects />
      </motion.div>
    </>
  )
}
