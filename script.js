document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search");
    let categories = document.querySelectorAll(".category");

    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase().trim();
        let foundAny = false; // Track if any food matches the search

        categories.forEach(category => {
            let foods = category.querySelectorAll(".food");
            let categoryTitle = category.getAttribute("data-category").toLowerCase();
            let categoryMatch = categoryTitle.includes(filter);
            let foundInCategory = false;

            foods.forEach(food => {
                let foodName = food.getAttribute("data-name").toLowerCase();

                if (foodName.includes(filter) || categoryMatch) {
                    food.style.display = "block"; // Show matching food
                    foundInCategory = true;
                    foundAny = true;
                } else {
                    food.style.display = "none"; // Hide non-matching food
                }
            });

            // Show or hide the entire category
            category.style.display = foundInCategory ? "block" : "none";
        });

        // If no matches, show a message (optional)
        if (!foundAny) {
            alert("No matching items found!"); // You can remove this line if not needed
        }
    });
});
