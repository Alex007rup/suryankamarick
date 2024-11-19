import styles from '../../styles/TextReveal.module.css'
import { motion } from "framer-motion"

function TextReveal() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={styles.main}
      >
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: "easeInOut" }}
          className={styles.title}
        >
          TechStack
        </motion.div>
      </motion.div>
    </>
  )
}

export default TextReveal