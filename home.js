

let topLinks = document.querySelectorAll('a[href="#top"]');//this line selects all anchor (<a>) elements in the document that have an href attribute equal to "#top" and stores them in the variable topLinks.
 //The querySelectorAll method returns a NodeList containing all matching elements, allowing you to work with multiple links that point to the top of the page.

topLinks.forEach(function(link) {//this line iterates over each link in the topLinks NodeList using the forEach method.
    // For each link, it executes the provided function, which takes the current link as an argument (link).
    link.addEventListener("click", function(event) {//this line adds an event listener to the current link that listens for the "click" event.
        // When the link is clicked, the provided function will be executed.
        event.preventDefault();//this line prevents the default behavior of the link, which is to navigate to the specified href (in this case, "#top").
        // By calling event.preventDefault(), the page will not jump to the top immediately when the link is clicked.it will allow for a smooth scrolling effect instead.

        window.scrollTo({//this line initiates a scroll action on the window object, which represents the browser's viewport.
            top: 0,//this line specifies the vertical position to scroll to, which is set to 0. This means the page will scroll to the very top.
            behavior: "smooth"//this line specifies the scrolling behavior. By setting it to "smooth", the page will scroll smoothly to the top instead of jumping abruptly.
        });
    });
});