import flyd from 'flyd'
import R from 'ramda'

// Much code taken from https://developer.mozilla.org/en-US/docs/Web/Events/resize
;(function() {
  const throttle = (type, name, obj)=> {
    obj = obj || window
    let running = false
    let func = ()=> {
      if(running) return
      running = true
      requestAnimationFrame(()=> {
        obj.dispatchEvent(new CustomEvent(name))
        running = false
      })
    }
    obj.addEventListener(type, func);
  }
  throttle("resize", "flyd_optimizedResize");
})()

let stream = flyd.stream([document.body.offsetWidth, document.body.offsetHeight])

// handle event
window.addEventListener("flyd_optimizedResize", ev => stream([document.body.offsetWidth, document.body.offsetHeight]))

module.exports = stream

