const openMenu = document.getElementById('open-menu')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle ('active');
}

openMenu.addEventListener('click', toggleMenu);