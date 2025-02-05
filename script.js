// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the search input and food items
    let searchInput = document.getElementById("search");
    let foodItems = document.querySelectorAll(".food");

    // Add an event listener to the search bar
    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase(); // Get search input text

        // Loop through each food item
        foodItems.forEach(food => {
            let foodName = food.getAttribute("data-name").toLowerCase();

            // Show/hide based on search match
            if (foodName.includes(filter)) {
                food.style.display = "block"; // Show matching items
            } else {
                food.style.display = "none"; // Hide non-matching items
            }
        });
    });
});
