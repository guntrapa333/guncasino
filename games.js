function openGame(gameType) {
    document.getElementById('games-list').style.display = 'none';
    const gameView = document.getElementById('game-view');
    const gameArea = document.getElementById('game-area');
    gameView.style.display = 'block';

    if (gameType === 'coin') {
        gameArea.innerHTML = `
            <h3>🪙 Coin Flip</h3>
            <p>Нажмите кнопку для подбрасывания</p>
            <h1 id="coin-result" style="margin: 20px 0;">❓</h1>
            <button class="btn" onclick="playCoinFlip()">Бросить монету</button>
        `;
    } else if (gameType === 'dice') {
        gameArea.innerHTML = `
            <h3>🎲 Dice Challenge</h3>
            <h1 id="dice-result" style="margin: 20px 0;">🎲</h1>
            <button class="btn" onclick="playDice()">Бросить кубик</button>
        `;
    } else {
        gameArea.innerHTML = `<h3>🚀 Crash Arcade</h3><p>Режим в процессе обновления...</p>`;
    }
}

function closeGame() {
    document.getElementById('game-view').style.display = 'none';
    document.getElementById('games-list').style.display = 'grid';
}

function playCoinFlip() {
    const res = Math.random() > 0.5 ? 'ОРЁЛ' : 'РЕШКА';
    document.getElementById('coin-result').innerText = res;
    window.addExperience(10);
}

function playDice() {
    const score = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-result').innerText = '🎲 ' + score;
    window.addExperience(15);
}
