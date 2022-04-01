const nav = document.getElementById('nav_links')
const burger = document.getElementById('burger')
const bookUs = document.getElementById('bookUs')

function toggleMenu() {
    nav.classList.toggle('nav_active')
    burger.classList.toggle('crossed_line')
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
}

burger.addEventListener('click', toggleMenu)
bookUs.addEventListener('click', scrollToBottom)

