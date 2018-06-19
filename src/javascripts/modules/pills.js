export default class Pills {
  constructor(el) {
    this.el = el
    this.setupListeners()
  }

  setupListeners() {
    window.addEventListener('load', () => this.handleLoad())
  }

  handleLoad() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => this.animatePills(), 500)
    this.releaseSqueezeTimeout = setTimeout(() => this.releasePillSqueeze(), 4500)
  }

  animatePills() {
    if (this.el.classList.contains('yellow-pill')) {
      this.el.classList.add('yellow-pill-roll')
    } else if (this.el.classList.contains('more-pills')) {
      this.el.classList.add('more-pills-roll')
    } else if (this.el.classList.contains('purple-pills')) {
      this.el.classList.add('purple-pills-roll')
    } else if(this.el.classList.contains('title-tablet')) {
      this.el.classList.add('title-tablet-roll')
    } else if(this.el.classList.contains('title-pill-red')) {
      this.el.classList.add('title-pill-red-bounce')
    } else {
      this.el.classList.add('pills-roll')
    }
  }

  releasePillSqueeze() {
    if (this.el.classList.contains('title-pill-red-bounce')) {
      console.log('did i wait?')
      this.el.classList.remove('title-pill-red-bounce')
    }
  }
}

