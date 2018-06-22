export default class Pillbar {
  constructor(el) {
    this.el = el
    this.createObserver()
  }

  createObserver() {
    this.observer

    this.options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }

    this.observer = new IntersectionObserver(this.handleIntersect, this.options)
    this.observer.observe(document.querySelector('.title-box'))
  }

  handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0 && !entry.isRequestingAnimationFrame) {
        window.requestAnimationFrame(() => {
          document.querySelector('.pillbar').classList.remove('pillbar-fixed')
        })
      } else if (entry.intersectionRatio <= 0 && !entry.isRequestingAnimationFrame) {
        window.requestAnimationFrame(() => {
          document.querySelector('.pillbar').classList.add('pillbar-fixed')
        })
      }
    })
  }
}
