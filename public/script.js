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

// Bible data
const bibleData = {
    "Genesis": { "1": ["In the beginning, God created the heavens and the earth.", "And the earth was without form, and void; and darkness was upon the face of the deep."] },
    "Exodus": { "1": ["Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob."] },
    // Add more books and chapters as needed
};

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

// Function to load chapters based on selected book
function loadChapters() {
    const bookSelect = document.getElementById('book-select');
    const chapterSelect = document.getElementById('chapter-select');
    const selectedBook = bookSelect.value;

    chapterSelect.innerHTML = ''; // Clear previous options

    if (bibleData[selectedBook]) {
        const chapters = Object.keys(bibleData[selectedBook]);
        chapters.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter;
            option.textContent = chapter;
            chapterSelect.appendChild(option);
        });
    }
}

// Function to load verses based on selected book and chapter
function loadVerses() {
    const bookSelect = document.getElementById('book-select');
    const chapterSelect = document.getElementById('chapter-select');
    const selectedBook = bookSelect.value;
    const selectedChapter = chapterSelect.value;

    const bibleTextContainer = document.getElementById('bible-text');
    bibleTextContainer.innerHTML = ''; // Clear previous text

    if (bibleData[selectedBook] && bibleData[selectedBook][selectedChapter]) {
        const verses = bibleData[selectedBook][selectedChapter];
        verses.forEach((verse, index) => {
            const verseElement = document.createElement('p');
            verseElement.textContent = `${index + 1}. ${verse}`;
            bibleTextContainer.appendChild(verseElement);
        });
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

// Populate book options
function populateBooks() {
    const bookSelect = document.getElementById('book-select');
    const books = Object.keys(bibleData);
    books.forEach(book => {
        const option = document.createElement('option');
        option.value = book;
        option.textContent = book;
        bookSelect.appendChild(option);
    });
}

// Show daily verse on page load
document.addEventListener('DOMContentLoaded', () => {
    showDailyVerse();
    populateBooks();
});

