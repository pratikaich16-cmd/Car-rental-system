

let topLinks = document.querySelectorAll('a[href="#top"]');

topLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
        });
    });
});
