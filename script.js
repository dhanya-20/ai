document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search");
    let categories = document.querySelectorAll(".category");

    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase().trim();

        categories.forEach(category => {
            let foods = category.querySelectorAll(".food");
            let categoryTitle = category.getAttribute("data-category").toLowerCase();
            let categoryMatch = categoryTitle.includes(filter);
            let foundInCategory = false; // To check if any food in this category matches

            foods.forEach(food => {
                let foodName = food.getAttribute("data-name").toLowerCase();

                if (foodName.includes(filter) || categoryMatch) {
                    food.style.display = "block"; // Show matching food
                    foundInCategory = true;
                } else {
                    food.style.display = "none"; // Hide non-matching food
                }
            });

            // Show or hide the category based on whether it contains a visible food
            if (foundInCategory || categoryMatch) {
                category.style.display = "block"; // Show the category
            } else {
                category.style.display = "none"; // Hide the category
            }
        });
    });
});
