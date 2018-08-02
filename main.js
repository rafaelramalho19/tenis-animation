const toggle = document.querySelector('.wrapper');

toggle.addEventListener('click', () => {
    const firstTime = !toggle.classList.contains('on') && !toggle.classList.contains('off');
    if (firstTime) {
        toggle.classList.toggle('off');
        return;
    }

    toggle.classList.toggle('on');
    toggle.classList.toggle('off');
});