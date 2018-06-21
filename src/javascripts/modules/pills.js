export default class Pills {
  constructor(el) {
    this.el = el
    this.setVars()
    this.setupListeners()
  }

  setVars() {
    this.ticking = false
    this.lastScrollY = 0
  }

  setupListeners() {
    window.addEventListener('load', () => this.handleLoad())
    window.addEventListener('scroll', () => this.handleScroll())
  }

  handleLoad() {
    this.timeout = setTimeout(() => this.animatePills(), 500)
    this.releaseSqueezeTimeout = setTimeout(() => this.releasePillSqueeze(), 3500)
  }

  handleScroll() {
    this.lastScrollY = window.scrollY
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.shiftPills()
      })
    }
    this.ticking = true
  }

  animatePills() {
    this.el.classList.add('pills-animating')
  }

  releasePillSqueeze() {
    this.el.querySelector('.title-pill-red-bounce').classList.remove('title-pill-red-bounce')
  }

  shiftPills() {
    this.ticking = false

    if (this.lastScrollY === 0) {

      if (!this.el.classList.contains('pills-move-in')) {
        this.el.classList.add('pills-move-in')
      } else if (this.el.classList.contains('pills-move-in')) {
        this.el.classList.remove('pills-move-in')
      }
      this.el.parentNode.style.overflow = 'visible'
    }
  }
}

