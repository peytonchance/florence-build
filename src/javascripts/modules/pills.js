export default class Pills {
  constructor(el) {
    this.el = el
    this.setupListeners()
  }

  setupListeners() {
    window.addEventListener('load', () => this.handleLoad())
  }

  handleLoad() {
    this.timeout = setTimeout(() => this.animatePills(), 500)
    this.releaseSqueezeTimeout = setTimeout(() => this.releasePillSqueeze(), 4500)
  }

  animatePills() {
    this.el.classList.add('pills-animating')
  }

  releasePillSqueeze() {
    var tempPill = this.el.children[1].children[0].children[0].children[0]
    if (tempPill.classList.contains('title-pill-red-bounce')) {
      tempPill.classList.remove('title-pill-red-bounce')
    }
  }
}

