export default class Pillbar {
  constructor(el) {
    this.el = el
    this.setVars()
    this.setupListeners()
  }

  setVars(el) {
    /* Ticking essentially == isRequestingAnimationFrame; I'm leaving
    it as 'ticking' to follow requestingAnimationFrame convention/docs */
    this.ticking = false
    this.lastScrollY = 0
    this.el.pillbarOffset = this.el.offsetTop
  }

  setupListeners() {
    window.addEventListener('resize', () => this.handleResize())
    window.addEventListener('scroll', () => this.handleScroll())
  }

  handleScroll() {
    this.lastScrollY = window.scrollY
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.togglePillbar()
      })
    }
    this.ticking = true
  }

  handleResize() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.getPillbarOffset(), 200)
  }

  getPillbarOffset() {
    if(!this.el.isPinned){
      this.el.pillbarOffset = this.el.offsetTop
    }
  }

  togglePillbar() {
    this.ticking = false

    if (this.lastScrollY > this.el.pillbarOffset) {
      this.el.classList.add('pillbar-fixed')
      this.el.isPinned = true
    } else {
      this.el.classList.remove('pillbar-fixed')
      this.el.isPinned = false
    }
  }
}
