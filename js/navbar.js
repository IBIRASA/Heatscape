
    AOS.init();
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector(".navbar");
        if (window.scrollY > navbar.offsetTop) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
