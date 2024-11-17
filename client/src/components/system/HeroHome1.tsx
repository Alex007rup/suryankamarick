import { motion } from 'framer-motion';


function HeroHome1() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
      </motion.div>
    </>
  )
}

export default HeroHome1