// Smooth scroll
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Typing animation
const text = ["Frontend Developer", "Python Programmer", "Problem Solver"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
    currentText = text[i];

    document.getElementById("typing").textContent =
        currentText.substring(0, j);

    if (!isDeleting) {
        j++;
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Fade-in animation
const elements = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

// Dark mode
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}