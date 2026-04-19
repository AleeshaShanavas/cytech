export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -34 },
  visible: { opacity: 1, x: 0 },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 34 },
  visible: { opacity: 1, x: 0 },
}

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const viewport = { once: true, amount: 0.2 }

export const smoothTransition = {
  duration: 0.62,
  ease: [0.22, 1, 0.36, 1],
}

export const cardHover = {
  y: -8,
  scale: 1.02,
  transition: { type: 'spring', stiffness: 280, damping: 20 },
}

export const buttonTap = {
  scale: 0.97,
}

export const iconFloat = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}
