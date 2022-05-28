const p1 = {
    score: 0,
    butao: document.querySelector('#p1'),
    display: document.querySelector('#player1')
}

const p2 = {
    score: 0,
    butao: document.querySelector('#p2'),
    display: document.querySelector('#player2')
}

const resetar = document.querySelector('#reset');
const ScoreMaximo = document.querySelector('#maximojogadas');
let ScoreFinal = 3;
let isGameOver = false;

function updateScores(jogador, oponente) {
    if (!isGameOver) {
        jogador.score += 1;
        if (jogador.score === ScoreFinal) {
            isGameOver = true;
            jogador.display.classList.add('vencedor');
            oponente.display.classList.add('perdedor');
        }
        jogador.display.textContent = jogador.score;
    }
}

p1.butao.addEventListener('click', () => {
    updateScores(p1, p2)
})

p2.butao.addEventListener('click', () => {
    updateScores(p2, p1)
})

ScoreMaximo.addEventListener('change', () => {
    ScoreFinal = parseInt(ScoreMaximo.value);
    reset();
})

resetar.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('vencedor', 'perdedor');
        player.display.classList.remove('vencedor', 'perdedor');
    }
}