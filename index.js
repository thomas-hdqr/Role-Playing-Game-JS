import characterData from '/data.js'
import Character from '/Character.js'

function attack() {
    orc.getDiceHtml()
    wizard.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
    if (wizard.dead || orc.dead ) {
        endGame()
    }
}

function endGame() {
    console.log('the game is over')
}


function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}


document.getElementById('attack-button').addEventListener('click', attack)
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()