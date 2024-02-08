import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'

export function countDown() { //essa função vai para actions e vai ser chamado na função togglerunning
    clearTimeout(state.countDownId) //limpa o timeout, fazendo que ele não pule 1s com todo clique no botão.

    if(!state.isRunning) { //verifica se a aplicação está correndo
        return    
    }   // countdown que vai decrementar os números.

        let minutes = Number(el.minutes.textContent) //convertendo string para number
        let seconds = Number(el.seconds.textContent) //convertendo string para number

        seconds-- //tem que chamar a função updateDisplay

        if(seconds < 0) {
            seconds = 59
            minutes--
        }

        if(minutes < 0) {
            reset() // faz a aplicação retornar ao valor original, não ficando no 00:00. tem que colocar a função timer.updateDisplay na função reset
            return
        }

    updateDisplay(minutes, seconds)
    state.countDownId = setTimeout(() => countDown(), 1000) //amarzenar o setTimeOut em uma variavel para não ficar pulando varios segundos quando clica.
}

export function increaseFive() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    minutes += 5
    updateDisplay(minutes, seconds)
}

export function decreaseFive() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    minutes -= 5

    if(minutes < 0) {
        return
    }

    updateDisplay(minutes, seconds)
}

export function updateDisplay(minutes, seconds) { // essa função vai ser chamada no countDown
    minutes = minutes ?? state.minutes // ?? verifica se o elemento é null, se for vai continuar com estado padrão.
    seconds = seconds ?? state.seconds //state padrão definido

    el.minutes.textContent = String(minutes).padStart(2, '0') //define os minutos e segundos e exporta para o index.js
    el.seconds.textContent = String(seconds).padStart(2, '0') // padstart acrescenta uma string texto, para evitar da hora fica 9:9
}