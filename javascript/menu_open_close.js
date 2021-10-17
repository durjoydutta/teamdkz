const mobileBtn= document.getElementById('mobile-menu');
        nav = document.querySelector('nav');
        mobileBtnExit = document.getElementById('mobile-exit');

    mobileBtn.addEventListener('click', () => {nav.classList.add('menu');})

    mobileBtnExit.addEventListener('click', () => {
        nav.classList.remove('menu');
    })
