function windowLoaded () {
  const keys = document.querySelectorAll('.key')
  console.log(keys)
  keys.forEach(key =>
    key.addEventListener('transitionend', removePlayingTransition))

  window.addEventListener('keydown', keyDown)
}

function keyDown (e) {
  const keyPressed = e.keyCode
  const audio = document.querySelector(`audio[data-key="${keyPressed}"]`)

  if (audio) {
    // start keycap transition
    var keycap = document.querySelector(`.key[data-key="${keyPressed}"]`)
    keycap.classList.add('playing')

    audio.currentTime = 0
    audio.play()
  }
}

function removePlayingTransition (e) {
  console.log(e.target)
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing')
  }
}

window.addEventListener('load', windowLoaded)
