document.getElementById("search").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let foods = document.querySelectorAll(".food");

    foods.forEach(food => {
        let text = food.getAttribute("data-name").toLowerCase();
        if (text.includes(filter)) {
            food.style.display = "block";
        } else {
            food.style.display = "none";
        }
    });
});
