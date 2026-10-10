let state = {
    gc: 1000,
    gf: 100,
    xp: 0,
    level: 1,
    streak: 1
};

function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById(`page-${pageId}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

function updateUI() {
    document.getElementById('bal-gc').innerText = state.gc;
    document.getElementById('bal-gf').innerText = state.gf;
    document.getElementById('user-level').innerText = state.level;
    document.getElementById('profile-streak').innerText = `${state.streak} дней 🔥`;
}

window.addExperience = function(amount) {
    state.xp += amount;
    if (state.xp >= state.level * 100) {
        state.level++;
        alert(`🎉 Новый уровень: ${state.level}!`);
    }
    updateUI();
};

function claimDailyBonus() {
    state.gc += 250;
    alert('✅ Забран ежедневный бонус: 250 GC!');
    updateUI();
}

function processExchange() {
    const amount = parseInt(document.getElementById('ex-amount').value);
    const type = document.getElementById('ex-type').value;

    if (isNaN(amount) || amount <= 0) return alert('Введите корректное число');

    if (type === 'GC_GF') {
        if (state.gc < amount) return alert('Недостаточно GC!');
        state.gc -= amount;
        state.gf += Math.floor(amount / 10);
    } else {
        if (state.gf < amount) return alert('Недостаточно GF!');
        state.gf -= amount;
        state.gc += amount * 8;
    }
    alert('Успешный обмен!');
    updateUI();
}

updateUI();
