/* https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/ */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const element = entry.target.querySelectorAll('.reveal');
        if (entry.isIntersecting) {
            element.forEach(el => {
                el.classList.add('activate');
            })
            return;
        }
        element.forEach(el => {
            el.classList.remove('activate');
        })
    })
});

observer.observe(document.querySelector('.socials'));
observer.observe(document.querySelector('.aboutme'));