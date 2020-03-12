/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function() { 
    const container = document.getElementsByClassName("player-container")[0]

const header = document.querySelector("#header")
console.log("Here's your header:", header.innerText)
// console.log(header.innerText)

/***** Deliverable 2 *****/
header.style.color = 'red'


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)



PLAYERS.forEach(function (player) {
    let playerDiv = document.createElement("div")
    playerDiv.innerHTML = ` 
    <div class="player" data-number="${player.number}">
    <h3>
    ${player.name}(<em>${player.nickname}</em>)
    </h3>
    <img src="${player.photo}" alt="${player.name}">
    </div>
    `
    container.appendChild(playerDiv)
})

/***** Deliverable 4 *****/

})