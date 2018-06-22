export default class Pillbar {
  constructor(el) {
    this.el = el
    this.setVars()
    this.createObserver()
  }

  setVars() {
    this.pillbar = document.querySelector('.pillbar')
    this.titleBox = document.querySelector('.title-box')
  }

  createObserver() {
    this.options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options)
    this.observer.observe(this.titleBox)
  }

  handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 && !entry.isRequestingAnimationFrame) {
        window.requestAnimationFrame(() => {
          this.pillbar.classList.remove('pillbar-fixed')
          entry.isRequestingAnimationFrame = true
        })
      } else if (entry.intersectionRatio <= 0 && !entry.isRequestingAnimationFrame) {
        window.requestAnimationFrame(() => {
         this.pillbar.classList.add('pillbar-fixed')
         entry.isRequestingAnimationFrame = true
        })
      }
      entry.isRequestingAnimationFrame = false
    })
  }
}
