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
    var titlePill = this.el.children[1].children[0].children[0].children[0]
    if (titlePill.classList.contains('title-pill-red-bounce')) {
      titlePill.classList.remove('title-pill-red-bounce')
    }
  }

  shakePills() {
    this.ticking = false

    if (this.lastScrollY === 0) {
      this.el.classList.add('pills-shaking')
      this.el.parentNode.classList.add('overflow-visible')
    } else {
      this.el.classList.remove('pills-shaking')
      this.el.parentNode.classList.remove('overflow-visible')
    }
  }
}

