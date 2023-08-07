const nav = document.getElementsByTagName('nav')[0];
const navIcon = document.getElementById('nav-icon');
const navList = document.getElementsByClassName('nav-list')[0];

navIcon.addEventListener('click', () => {
    if (navIcon.classList.contains('fa-bars')) {
        nav.classList.add('navbar-mobile')
        navIcon.className = 'fas fa-times'
        navIcon.classList.add('nav-expanded-icon')
        navList.style.display = 'flex'
        navList.classList.add('nav-expanded')
    } else {
        nav.classList.remove('navbar-mobile')
        navIcon.className = 'fas fa-bars'
        navIcon.classList.remove('nav-expanded-icon')
        navList.style.display = 'none'
        navList.classList.remove('nav-expanded')
    }
})