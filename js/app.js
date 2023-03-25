window.addEventListener("scroll", function () {
    const nav = document.querySelector("[data-nav]");
    const home = document.querySelector("#home");
    const total = home.offsetTop + home.offsetHeight;
    if (window.scrollY >= total - 3) {
        nav.classList.add('fixed')
        this.setTimeout(() => {
            nav.classList.add('show');
        }, 50);
    } else {
        nav.classList.remove('fixed', 'show');
    }
});
