export default class Nurse {
  constructor(el) {
    this.el = el
    this.setVars()
    this.createObserver()
  }

  setVars() {
    this.hasAppeared = false
    this.meetFlorence = document.querySelector('.concept .section-intro')
    this.florenceCharacter = document.querySelector('.florence')
  }

  createObserver() {
    this.options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options)
    this.observer.observe(this.florenceCharacter)
  }

  handleIntersect(entries, options) {
    entries.forEach((entry) => {
      if (!this.hasAppeared && entry.intersectionRatio > 0) {
        console.log('triggered')
        this.florenceCharacter.classList.add('florence-move-in')
        this.hasAppeared = true
      }
    })
  }
}
