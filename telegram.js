const tg = window.Telegram?.WebApp;

function initTelegram() {
    if (tg) {
        tg.ready();
        tg.expand();
        if (tg.themeParams) {
            document.documentElement.style.setProperty('--bg-main', tg.themeParams.bg_color || '#0d0f12');
        }
    }
}
initTelegram();
