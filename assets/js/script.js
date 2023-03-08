const counters = document.querySelectorAll('strong')


counters.forEach(counter => {
  counter.textContent = '0'

  const updateCounter = () => {
    const target = Number(counter.getAttribute('data-target'))
    const content = Number(counter.textContent)
    const increment = target/200

    if(content < target) {
      counter.textContent = `${Math.ceil(content+increment)}`
      setTimeout(updateCounter, 1)
    }
  }
  
  updateCounter()

})