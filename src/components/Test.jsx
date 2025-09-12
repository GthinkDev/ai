'use client'

import { motion } from "framer-motion";
export default function Test() {
  return (
    <div>
       <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mt-4 text-lg">
          This is the contact page. You can reach us at
          <a className="text-blue-500" href="mailto:info@yourdomain.com">
            info@yourdomain.com
          </a>
          .
        </p>
      </motion.div>
    </div>
  )
}
