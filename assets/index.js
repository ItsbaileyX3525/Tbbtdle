// Notification System
function showNotification(message, type = 'default', duration = 5000) {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notification-message');
    const closeButton = document.getElementById('notification-close');
    
    // Clear existing classes and set message
    notification.className = 'notification';
    messageElement.textContent = message;
    
    // Add type-specific class
    if (type === 'success') {
        notification.classList.add('success');
    } else if (type === 'error') {
        notification.classList.add('error');
    } else if (type === 'warning') {
        notification.classList.add('warning');
    }
    
    // Show notification
    notification.classList.add('show');
    
    // Auto-hide after duration
    const hideTimeout = setTimeout(() => {
        hideNotification();
    }, duration);
    
    // Close button functionality
    closeButton.onclick = () => {
        clearTimeout(hideTimeout);
        hideNotification();
    };
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('hide');
    
    setTimeout(() => {
        notification.classList.remove('show', 'hide', 'success', 'error', 'warning');
    }, 300);
}

// Daily character rotation system
function getDailyCharacter() {
    // Create a seed based on the current date
    const today = new Date();
    const dateString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    // Simple hash function for the date
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
        const char = dateString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Use absolute value and modulo to get character index
    const characterIndex = Math.abs(hash) % characters.length;
    return characters[characterIndex];
}

let currentAnswer = getDailyCharacter();
let guesses = [];
const MAX_GUESSES = 8;

// DOM elements
const characterInput = document.querySelector('.character-input');
const submitBtn = document.querySelector('.submit-btn');
const guessesContainer = document.querySelector('.guesses-container');
const autocompleteDropdown = document.getElementById('autocomplete-dropdown');
const guessCountElement = document.getElementById('guess-count');

let currentHighlightedIndex = -1;
let filteredCharacters = [];

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadSavedGame();
    initializeChangelogModal();
});

function setupEventListeners() {
    submitBtn.addEventListener('click', makeGuess);
    characterInput.addEventListener('keydown', handleKeyDown);
    characterInput.addEventListener('input', handleAutocomplete);
    characterInput.addEventListener('blur', hideAutocomplete);
    characterInput.addEventListener('focus', handleAutocomplete);
    
    // Close autocomplete when clicking outside
    document.addEventListener('click', function(e) {
        if (!characterInput.contains(e.target) && !autocompleteDropdown.contains(e.target)) {
            hideAutocomplete();
        }
    });
}

function handleKeyDown(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (currentHighlightedIndex >= 0 && filteredCharacters.length > 0) {
            selectCharacter(filteredCharacters[currentHighlightedIndex].name);
        } else {
            makeGuess();
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateAutocomplete(1);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateAutocomplete(-1);
    } else if (e.key === 'Escape') {
        hideAutocomplete();
        characterInput.blur();
    }
}

function navigateAutocomplete(direction) {
    if (filteredCharacters.length === 0) return;
    
    currentHighlightedIndex += direction;
    
    if (currentHighlightedIndex < 0) {
        currentHighlightedIndex = filteredCharacters.length - 1;
    } else if (currentHighlightedIndex >= filteredCharacters.length) {
        currentHighlightedIndex = 0;
    }
    
    updateHighlight();
}

function updateHighlight() {
    const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
    items.forEach((item, index) => {
        if (index === currentHighlightedIndex) {
            item.classList.add('highlighted');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('highlighted');
        }
    });
}

function selectCharacter(characterName) {
    characterInput.value = characterName;
    hideAutocomplete();
    characterInput.focus();
}

function handleAutocomplete() {
    const input = characterInput.value.toLowerCase().trim();
    currentHighlightedIndex = -1;
    
    if (input.length < 1) {
        hideAutocomplete();
        return;
    }
    
    // Filter characters based on input
    filteredCharacters = characters.filter(char => 
        char.name.toLowerCase().includes(input) && 
        !guesses.some(g => g.name === char.name) // Exclude already guessed characters
    );
    
    if (filteredCharacters.length === 0) {
        hideAutocomplete();
        return;
    }
    
    // Limit to top 8 matches for performance
    filteredCharacters = filteredCharacters.slice(0, 8);
    
    showAutocomplete();
}

function showAutocomplete() {
    autocompleteDropdown.innerHTML = '';
    
    filteredCharacters.forEach((character, index) => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.textContent = character.name;
        
        item.addEventListener('mousedown', function(e) {
            e.preventDefault(); // Prevent blur event
            selectCharacter(character.name);
        });
        
        item.addEventListener('mouseenter', function() {
            currentHighlightedIndex = index;
            updateHighlight();
        });
        
        autocompleteDropdown.appendChild(item);
    });
    
    autocompleteDropdown.classList.add('show');
}

function hideAutocomplete() {
    autocompleteDropdown.classList.remove('show');
    currentHighlightedIndex = -1;
    filteredCharacters = [];
}

function makeGuess() {
    const guess = characterInput.value.trim();
    if (!guess) return;

    // Check if maximum guesses reached
    if (guesses.length >= MAX_GUESSES) {
        showNotification('Maximum number of guesses reached! Game over.', 'error');
        return;
    }

    const character = characters.find(char => 
        char.name.toLowerCase() === guess.toLowerCase()
    );

    if (!character) {
        showNotification('Character not found! Try again.', 'error');
        return;
    }

    if (guesses.some(g => g.name === character.name)) {
        showNotification('You already guessed this character!', 'warning');
        return;
    }

    guesses.push(character);
    displayGuess(character);
    updateGuessCounter();
    characterInput.value = '';

    if (character.name === currentAnswer.name) {
        celebrateWin();
    } else if (guesses.length >= MAX_GUESSES) {
        gameOver();
    }

    saveGame();
}

function displayGuess(character) {
    const row = document.createElement('div');
    row.className = 'guess-row';

    const categories = ['name', 'gender', 'field', 'relationship', 'firstEpisode'];
    const labels = ['Name:', 'Gender:', 'Field:', 'Status:', 'First:'];
    
    categories.forEach((category, index) => {
        const cell = document.createElement('div');
        cell.className = 'guess-cell';
        cell.textContent = character[category];
        cell.setAttribute('data-label', labels[index]);
        
        // Determine correctness
        if (character[category] === currentAnswer[category]) {
            cell.classList.add('correct');
        } else if (category === 'firstEpisode' && character[category] && currentAnswer[category]) {
            // Compare episodes numerically (e.g., S1E1 vs S3E21)
            const guessEpisode = parseEpisode(character[category]);
            const correctEpisode = parseEpisode(currentAnswer[category]);
            
            if (guessEpisode < correctEpisode) {
                cell.classList.add('higher');
            } else if (guessEpisode > correctEpisode) {
                cell.classList.add('lower');
            } else {
                cell.classList.add('partial');
            }
        } else {
            cell.classList.add('incorrect');
        }
        
        row.appendChild(cell);
    });

    guessesContainer.appendChild(row);
}

// Helper function to parse episode strings like "S1E1", "S3E21" into comparable numbers
function parseEpisode(episodeStr) {
    if (!episodeStr) return 0;
    
    // Handle formats like "S1E1", "S3E21", etc.
    const match = episodeStr.match(/S(\d+)E(\d+)/i);
    if (match) {
        const season = parseInt(match[1]);
        const episode = parseInt(match[2]);
        // Create a comparable number: season * 100 + episode
        // S1E1 = 101, S3E21 = 321, etc.
        return season * 100 + episode;
    }
    
    return 0; // Default for unparseable formats
}

function celebrateWin() {
    setTimeout(() => {
        showNotification(`Congratulations! You found ${currentAnswer.name}! 🎉`, 'success');
        disableInput();
    }, 500);
}

function gameOver() {
    setTimeout(() => {
        showNotification(`Game Over! 😞 Better luck tomorrow!`, 'error');
        disableInput();
    }, 500);
}

function disableInput() {
    characterInput.disabled = true;
    submitBtn.disabled = true;
    characterInput.placeholder = "Game finished - try again tomorrow!";
    hideAutocomplete();
}

function updateGuessCounter() {
    if (guessCountElement) {
        guessCountElement.textContent = guesses.length;
        
        // Change color based on remaining guesses
        if (guesses.length >= 6) {
            guessCountElement.style.color = '#e74c3c'; // Red when getting close
        } else if (guesses.length >= 4) {
            guessCountElement.style.color = '#f39c12'; // Orange warning
        } else {
            guessCountElement.style.color = '#27ae60'; // Green when plenty left
        }
    }
}

function saveGame() {
    const gameState = {
        currentAnswer: currentAnswer,
        guesses: guesses,
        date: new Date().toDateString()
    };
    localStorage.setItem('tbbtdle-game', JSON.stringify(gameState));
}

function loadSavedGame() {
    const saved = localStorage.getItem('tbbtdle-game');
    if (saved) {
        const gameState = JSON.parse(saved);
        const today = new Date().toDateString();
        
        if (gameState.date === today) {
            // Same day - load saved progress
            currentAnswer = gameState.currentAnswer;
            guesses = gameState.guesses;
            guesses.forEach(guess => displayGuess(guess));
            updateGuessCounter();
            
            // Check if game is already finished
            if (guesses.length > 0) {
                const lastGuess = guesses[guesses.length - 1];
                if (lastGuess.name === currentAnswer.name) {
                    // Game was won
                    disableInput();
                } else if (guesses.length >= MAX_GUESSES) {
                    // Game was lost
                    disableInput();
                }
            }
        } else {
            // New day - reset game with new character
            currentAnswer = getDailyCharacter();
            guesses = [];
            // Clear the guesses container
            guessesContainer.innerHTML = '';
            updateGuessCounter();
        }
    } else {
        // No saved game - start fresh
        currentAnswer = getDailyCharacter();
        updateGuessCounter();
    }
}

// Add some fun animations
function addSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
    sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle effect on correct guesses
const originalDisplayGuess = displayGuess;
displayGuess = function(character) {
    originalDisplayGuess(character);
    
    // Add sparkle effect for correct answers
    const lastRow = guessesContainer.lastElementChild;
    const correctCells = lastRow.querySelectorAll('.correct');
    correctCells.forEach(cell => {
        setTimeout(() => addSparkleEffect(cell), Math.random() * 500);
    });
};

// Changelog Modal Functions
function initializeChangelogModal() {
    const changelogBtn = document.getElementById('changelog-btn');
    const changelogModal = document.getElementById('changelog-modal');
    const changelogClose = document.getElementById('changelog-close');

    // Open modal
    changelogBtn.addEventListener('click', () => {
        changelogModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal
    changelogClose.addEventListener('click', closeChangelogModal);
    
    // Close modal when clicking outside
    changelogModal.addEventListener('click', (e) => {
        if (e.target === changelogModal) {
            closeChangelogModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && changelogModal.classList.contains('show')) {
            closeChangelogModal();
        }
    });
}

function closeChangelogModal() {
    const changelogModal = document.getElementById('changelog-modal');
    changelogModal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}
