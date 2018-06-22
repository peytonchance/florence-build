export default class Pills {
  constructor(el) {
    this.el = el
    this.setupListeners()
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
    this.observer

    this.options = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    }

    this.observer = new IntersectionObserver(this.handleIntersect, this.options)
    this.observer.observe(document.querySelector('.green-tablet'))
  }

  handleIntersect(entries, observer) {
    var titleBox = document.querySelector('.title-box')
    entries.forEach(function(entry) {
        if (entry.time < 7000) {
          //preventing pill shift animation onLoad
        } else if (entry.intersectionRatio > 0 && !titleBox.classList.contains('pills-move-in')) {
          titleBox.classList.add('pills-move-in')
        } else if (entry.intersectionRatio > 0 && titleBox.classList.contains('pills-move-in')) {
          titleBox.classList.remove('pills-move-in')
        }
      })
    }

  animatePills() {
    this.el.classList.add('pills-animating')
  }

  releasePillSqueeze() {
    this.el.querySelector('.title-pill-red-bounce').classList.remove('title-pill-red-bounce')
  }
}
