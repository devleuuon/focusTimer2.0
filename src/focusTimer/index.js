import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay() //importa do timer, isso faz a troca dos elementos com texcontent

    events.registerControls()
    events.registerAudio()
}