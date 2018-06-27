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
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options)
    this.observer.observe(this.titleBox)
  }

  handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
          this.pillbar.classList.remove('pillbar-fixed')
      } else if (entry.intersectionRatio <= 0) {
         this.pillbar.classList.add('pillbar-fixed')
      }
    })
  }
}
