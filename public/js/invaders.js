canvas = document.querySelector(".invaders__game")
const button = document.querySelector(".invaders__btn")
const rightArm = document.querySelector(".right-arm")
const leftArm = document.querySelector(".left-arm")
const guy = document.querySelector(".guy__container")
const score = document.querySelector(".score")




const defaults = {
    playerStart: "position:absolute; left: 47rem; bottom:-40px;height: 10rem;z-index: 500;display:block",
    spawn1: left = "left:44%;",
    spawn2: left = "left:25%;",
    spawn3: left = "left:60d%;",
    lastSpawn: 0,

}
const playerStats = {
    lives: 3,
    score: 0
}

const startGame = () => {
    let score = 0
    updateScore(score)
    guy.style = defaults.playerStart
    addListeners()
}

const moveLeft = () => {
    let left = guy.style.left
    left = left[0] + left[1]
    left = left - 5 + "rem"

    guy.style.left = left

}

const moveRight = () => {
    let left = guy.style.left
    left = left[0] + left[1]
    left = (left - 0) + 5 + "rem"

    guy.style.left = left

}

const punchRight = () => {
    rightArm.style.transform = 'rotate(-90deg)';
    rightArm.style.transformOrigin = '0%';

}

const punchLeft = () => {
    leftArm.style.transform = 'rotate(90deg)';
    leftArm.style.transformOrigin = '100%';

}

const spawn = () => {
    let spawnPoint = Math.floor(Math.random() * 3) + 1
    while (spawnPoint === defaults.lastSpawn) {
        spawnPoint = Math.floor(Math.random() * 3) + 1
    }
    defaults.lastSpawn = spawnPoint;
}

const addListeners = () => {
    document.addEventListener("keydown", (e) => {
        e = e.key
        if (e === "a" | e === "A") {
            if (guy.style.left != "12rem") {
                moveLeft()
            }

        } else if (e === "d" | e === "D") {
            if (guy.style.left[0] < 8) {
                moveRight()
            }

        } else if (e === "e" | e === "E") {
            punchRight()
        } else if (e === "q" | e === "Q") {
            punchLeft()
        }

    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'e' | event.key === 'E') {
            rotationAngle = 0;
            rightArm.style.transform = `rotate(${rotationAngle}deg)`;
        } else if (event.key === 'q' | event.key === 'Q') {
            rotationAngle = 0;
            leftArm.style.transform = `rotate(${rotationAngle}deg)`;
        }
    });


}

const updateScore = (updatedScore) => {
    score.innerHTML = updatedScore
}

button.addEventListener('click', startGame)




