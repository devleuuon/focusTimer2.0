import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import { button1 } from './elements.js'
import { button2 } from './elements.js'
import { button3 } from './elements.js'
import { button4 } from './elements.js'

export function toggleRunning() {
    state.isRunning = true //faz o botão play funcionar tornando true

    timer.countDown() //função vem do timer.js
}

export function reset() {
    state.isRunning = false //faz o botão parar. lembrando que o state.js dele inicial é false
    timer.updateDisplay() //faz a aplicação voltar ao valor original, não ficando no 00:00
}

export function more() {
    timer.increaseFive()
}

export function less() {
    timer.decreaseFive()
}

//SOUNDS BUTTONS

export function soundForest() {
    button1.classList.toggle('cardButton')
    sounds.buttonForest.play()
}

export function soundRain() {
    button2.classList.toggle('cardButton')
    sounds.buttonRain.play()
}

export function soundCoffeeShop() {
    button3.classList.toggle('cardButton')
    sounds.buttoncoffeeShop.play()
}

export function soundFirePlace() {
    button4.classList.toggle('cardButton')
    sounds.buttonfirePlace.play()
}