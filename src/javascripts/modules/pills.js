export default class Pills {
  constructor(el) {
    this.el = el
    this.setVars()
    this.setupListeners()
  }

  setVars() {
    this.firstIntersection = true
    this.titleBox = document.querySelector('.title-box')
    this.greenTablet = document.querySelector('.green-tablet')
  }

  setupListeners() {
    window.addEventListener('load', () => this.handleLoad())
    this.createObserver()
  }

  handleLoad() {
    this.timeout = setTimeout(() => this.animatePills(), 500)
    this.releaseSqueezeTimeout = setTimeout(() => this.releasePillSqueeze(), 3500)
  }

  createObserver() {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    }

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options)
    this.observer.observe(this.greenTablet)
  }

  handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (this.firstIntersection) {
        //preventing pill shift animation onLoad
      } else if (entry.intersectionRatio > 0 && !this.titleBox.classList.contains('pills-move-in')) {
          this.titleBox.classList.add('pills-move-in')
      } else if (entry.intersectionRatio > 0 && this.titleBox.classList.contains('pills-move-in')) {
          this.titleBox.classList.remove('pills-move-in')
      }
      this.firstIntersection = false
    })
  }

  animatePills() {
    this.el.classList.add('pills-animating')
  }

  releasePillSqueeze() {
    this.el.querySelector('.title-pill-red-bounce').classList.remove('title-pill-red-bounce')
  }
}
