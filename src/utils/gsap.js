import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

const isDesktop = window.matchMedia('(width > 768px)').matches
gsap.registerPlugin(ScrollTrigger)

if (isDesktop) {
  const lenis = new Lenis({
    duration: 3
  })
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
}

export { gsap }