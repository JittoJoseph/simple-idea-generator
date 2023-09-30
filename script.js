const ideaElement = document.getElementById('idea');
const generateButton = document.getElementById('generate-button');

// Function to fetch a random activity from the Bored API
async function generateIdea() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity');
        const data = await response.json();
        ideaElement.textContent = data.activity;
    } catch (error) {
        console.error('Error fetching data:', error);
        ideaElement.textContent = 'Oops! Something went wrong. Please try again.';
    }
}

// Add click event listener to the "Generate Idea" button
generateButton.addEventListener('click', generateIdea);

// Initial idea generation on page load
generateIdea();
