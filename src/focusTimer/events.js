// import * as el from './elements.js'
import { controls } from './elements.js'
import { cards } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
    controls.addEventListener('click', (event) => { //vai pegar todos os cliques dos botões
        const action = event.target.dataset.action //dataset conecta no data-action no html
        
        if(typeof actions[action] != 'function') { //se não tiver uma função vai retornar. exemplo é a função togglerunning.
            return
        }

        actions[action]()
    })
}

export function registerAudio() {
    cards.addEventListener('click', (event) => { //tem que exportar registeAudio para index.js para rodar.

        const action = event.target.dataset.action


        if(typeof actions[action] != 'function') {
            return
        }

        actions[action]()
    })
}

