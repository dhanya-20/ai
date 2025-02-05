document.getElementById("search").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let methods = document.querySelectorAll(".method");

    methods.forEach(method => {
        let text = method.getAttribute("data-name").toLowerCase();
        if (text.includes(filter)) {
            method.style.display = "block";
        } else {
            method.style.display = "none";
        }
    });
});
