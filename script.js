document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search");
    let foodItems = document.querySelectorAll(".food");

    // Listen for input in the search bar
    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase().trim(); // Convert input to lowercase and trim spaces

        foodItems.forEach(food => {
            let foodName = food.getAttribute("data-name").toLowerCase();
            let foodCategory = food.getAttribute("data-category").toLowerCase();

            // Show if it matches the food name OR category
            if (foodName.includes(filter) || foodCategory.includes(filter)) {
                food.style.display = "block";
            } else {
                food.style.display = "none";
            }
        });
    });
});
