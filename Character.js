import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'



function Character(data) {
    Object.assign(this, data)

    this.takeDamage =  function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce(function(total, num){
            return total + num
        })    
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.health = 0
            this.dead = true
        }
    }

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, currentDiceScore } = this;      
        let diceHtml = this.getDiceHtml(diceCount);        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }  
}

export default Character