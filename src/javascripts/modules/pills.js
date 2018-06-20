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
        this.shakePills()
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

  shakePills() {
    this.ticking = false

    if (this.lastScrollY === 0) {

      if (!this.el.classList.contains('pills-shake-in')) {
        this.el.classList.add('pills-shake-in')
      } else if (this.el.classList.contains('pills-shake-in')) {
        this.el.classList.remove('pills-shake-in')
      }
      this.el.parentNode.style.overflow = 'visible'
    }
  }
}

