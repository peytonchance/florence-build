export default class Pillbar {
  constructor(el) {
    this.el = el
    this.ticking = false
    this.lastScrollY = 0

    window.addEventListener('scroll', () => this.handleScroll())
  }

  handleScroll() {
    this.lastScrollY = window.scrollY
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.togglePillbar()
      })
    }
    this.ticking = true;
  }

  togglePillbar() {
    this.ticking = false
    if (this.lastScrollY > 420) {
      this.el.className = 'pillbar pillbar-fixed'
    } else {
      this.el.className = 'pillbar'
    }
  }
}
