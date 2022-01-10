export function renderBunny(bunny) {
    const bunnyEl = document.createElement('div');

    bunnyEl.classList.add('bunny');
    bunnyEl.textContent = bunny.name;
}