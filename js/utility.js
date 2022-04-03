function rectangularCollison({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

let result = document.querySelector('#result');
let gameOver = false;
function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId);
    result.style.display = 'flex';
    if (player.health === enemy.health) {
        result.innerHTML = 'TIE';
    }
    else if (player.health > enemy.health) {
        result.innerHTML = 'RED WINS!';
    }
    else {
        result.innerHTML = 'BLUE WINS!';
    }
    gameOver = true;
}
let timer = 40;
let timerId;
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--;
        document.querySelector('#timer').innerHTML = timer;
    }
    if (timer === 0) {
        determineWinner({ player, enemy, timerId });
    }
}