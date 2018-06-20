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
    this.releaseSqueezeTimeout = setTimeout(() => this.releasePillSqueeze(), 3500)
  }

  animatePills() {
    this.el.classList.add('pills-animating')
  }

  releasePillSqueeze() {
    this.el.querySelector('.title-pill-red-bounce').classList.remove('title-pill-red-bounce')
  }
}

