const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// When the user clicks the button, open the modal
const btn = document.querySelectorAll('.modal-button');
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute('href'));
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// When the user clicks on (x) button, close the modal
const exit = document.querySelectorAll('.modal-exit')
for (var i = 0; i < exit.length; i++) {
    exit[i].onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}