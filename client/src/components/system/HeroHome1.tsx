import { motion } from 'framer-motion';
import InfinityScrollHorizontal from './InfinityScrollHorizontal';
import TextReveal from './TextReveal';


function HeroHome1() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <TextReveal />
        <InfinityScrollHorizontal />
      </motion.div>
    </>
  )
}

export default HeroHome1