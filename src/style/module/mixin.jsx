let mixin = {
  whichTransitionEvent: () => {
    let t, el = document.createElement('fakeElement')

    var transitions = {
      'transition'      : 'transitionend',
      'OTransition'     : 'oTransitionEnd',
      'MozTransition'   : 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t]
      }
    }
  },
  scrollTo: (node, time) => {
    let interval = 10,
      count = time / interval,
      scrollInterval = setInterval(() => {
        let scrollIndex = node.getBoundingClientRect().top / count // ease function
        window.scrollBy(0, scrollIndex)
        if (1 >= count--) {
          clearInterval(scrollInterval) // scroll end
        }
      }, interval)
  }
}

export default mixin