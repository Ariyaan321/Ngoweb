import React, { useState } from 'react'
import { animate, motion } from 'framer-motion'


const variants = {
  middle: {
    height: 120,
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 40,
      resDelta: 2,
      duration: 2
    }

  },
  open: {

  }
}


export default function App2() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="woof">
      <motion.div className='woofin'
        // initial={`${isOpen}`}
        initial={isOpen ? true : false}
        animate={!isOpen && "middle"}

        variants={variants}

      >
        <motion.h1
          initial={{ y: 200 }}
          animate={{
            y: 0
            // scale: [1, 2, 2, 1, 1],
            // rotate: [0, 0, 270, 270, 0]
          }}
          transition={{
            type: "spring",
            damping: 9,
          }}

        >
          Woofers
        </motion.h1>
        <h2>Coming Soon</h2>

      </motion.div>
    </div >
  )
}