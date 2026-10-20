const userForm = document.getElementById("user-form");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

const greeting = document.getElementById("greeting");
const ageMessage = document.getElementById("age-message");
const ageMonths = document.getElementById("age-months");
const quotesContainer = document.getElementById("quotes-container");

// Motivational quotes
const quotes = [
    "Believe in yourself and your abilities.",
    "Every day is a new opportunity to learn.",
    "Small steps lead to big achievements.",
    "Never give up on your dreams.",
    "Your future starts with what you do today."
];

// Display the personalized information
function displayUser(name, age) {
    // Display a personalized greeting
    greeting.textContent = `Hello, ${name}! Welcome to your webpage.`;

    // Check the user's age
    if (age >= 18) {
        ageMessage.textContent = "You are 18 or older. You can access adult content where legally permitted.";
    } else {
        ageMessage.textContent = "You are under 18. Some content may not be suitable for your age.";
    }


 // Calculate age in months
    ageMonths.textContent = `You are approximately ${age * 12} months old.`;

    // Clear previous quotes
    quotesContainer.innerHTML = "";

    // Display five motivational quotes using a loop
    for (let i = 0; i < 5; i++) {
        const quote = document.createElement("p");

        quote.textContent = quotes[i];

        quotesContainer.appendChild(quote);
    }
}

// Handle form submission
userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    // Check that the name is not empty and age is valid
    if (name === "" || ageInput.value === "" || age < 0 || age > 120 || !Number.isInteger(age)) {
        alert("Please enter a valid name and age between 0 and 120.");
        return;
    }

    // Save the user's information in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);

    // Display the user's information
    displayUser(name, age);
});

