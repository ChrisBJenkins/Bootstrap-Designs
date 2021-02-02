const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                let numb = (index / 7) + 1.25;
                link.style.animation = 'navLinkFade 0.5s ease forwards ${numb}s';
                console.log(numb);
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();