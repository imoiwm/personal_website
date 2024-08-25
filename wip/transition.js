const observer = new observer(entries => {
    entries.forEach(entry => {
        const element = entry.target.querySelectorAll('.reveal');
        element.forEach(el => {
            el.classList.add('activate');
        })
        return;
    })
});

observer.observe(document.querySelector('.link'));