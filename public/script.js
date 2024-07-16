// Example daily verse
const dailyVerses = [
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
    "The Lord is my shepherd, I lack nothing. - Psalm 23:1",
    "I can do all this through him who gives me strength. - Philippians 4:13"
];

// Example Bible verses for search
const bibleVerses = [
    { book: "John", chapter: 3, verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { book: "Psalm", chapter: 23, verse: 1, text: "The Lord is my shepherd, I lack nothing." },
    { book: "Philippians", chapter: 4, verse: 13, text: "I can do all this through him who gives me strength." }
];

// Function to show a daily verse
function showDailyVerse() {
    const dailyVerseElement = document.getElementById('daily-verse');
    const randomIndex = Math.floor(Math.random() * dailyVerses.length);
    dailyVerseElement.textContent = dailyVerses[randomIndex];
}

// Function to search the Bible
function searchBible() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const results = bibleVerses.filter(verse => 
        verse.text.toLowerCase().includes(query) ||
        `${verse.book.toLowerCase()} ${verse.chapter}:${verse.verse}`.includes(query)
    );

    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    if (results.length > 0) {
        results.forEach(result => {
            const verseElement = document.createElement('div');
            verseElement.classList.add('verse-result');
            verseElement.innerHTML = `
                <p><strong>${result.book} ${result.chapter}:${result.verse}</strong></p>
                <p>${result.text}</p>
            `;
            resultsContainer.appendChild(verseElement);
        });
    } else {
        resultsContainer.textContent = 'No results found.';
    }
}

// Function to handle login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement login functionality here
    alert(`Logged in as ${username}`);
});

// Function to handle logout
function logout() {
    // Implement logout functionality here
    alert('Logged out successfully');
}

// Show daily verse on page load
document.addEventListener('DOMContentLoaded', showDailyVerse);

