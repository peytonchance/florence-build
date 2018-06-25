export default class Demos {
  constructor(el) {
    this.el = el
    this.setVars()
    this.createObserver()
  }

  setVars() {
    this.hasAppeared = false
    this.demoOne = document.querySelector('.demo-one .messages')
    this.demoTwo = document.querySelector('.demo-two .messages')
  }

  createObserver() {

    this.options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options)
    this.observer.observe(this.demoOne)
    this.observerTwo = new IntersectionObserver(this.handleIntersect.bind(this), this.options)
    this.observerTwo.observe(this.demoTwo)
  }

  handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('messages-appearing')
        this.hasAppeared = true
      }
    })
  }
}
