export default class Pills {
  constructor(el) {
    this.el = el
    this.setVars()
    this.setupListeners()
  }

  setVars() {
    this.pillVariants = ['yellow-', '', 'more-', 'purple-']
  }

  setupListeners() {
    window.addEventListener('load', () => this.setupTimeout())
  }

  setupTimeout() {
    this.timeout = (this.animatePills(), 200)
  }

  animatePills() {
    console.log(this.pillVariants.length);
    var i;
    for (i=0; i < this.pillVariants.length; i++) {
      this.rollClass = this.pillVariants[i] + 'pills-roll'
      this.el.classList.add(this.rollClass)
    }
  }
}

