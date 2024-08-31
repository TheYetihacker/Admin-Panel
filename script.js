document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.dashboard-section');
    const dataSections = document.querySelectorAll('.data-section');
    const contentContainer = document.getElementById('content');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            // Hide all data sections
            dataSections.forEach(dataSection => {
                dataSection.style.display = 'none';
            });

            // Show the content container and the selected data section
            const sectionId = section.getAttribute('data-section');
            document.getElementById(sectionId).style.display = 'block';
            contentContainer.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addQuestionBtn = document.getElementById('add-question-btn');
    const addGameBtn = document.getElementById('add-game-btn');
    const gameList = document.getElementById('game-list');
    const alertBox = document.getElementById('alert-box');
    
    // Handle Add Game button click
    addGameBtn.addEventListener('click', function() {
        if (gameList.children.length >= 5) {
            alertBox.style.display = 'block';
        } else {
            alertBox.style.display = 'none';
            const newGame = prompt('Enter the new game name:');
            if (newGame) {
                const newGameItem = document.createElement('li');
                newGameItem.innerHTML = `${newGame} <button class="remove-game">Remove</button>`;
                gameList.appendChild(newGameItem);
                attachRemoveEvent(newGameItem.querySelector('.remove-game'));
            }
        }
    });
    
    // Handle Remove Game button click
    function attachRemoveEvent(button) {
        button.addEventListener('click', function() {
            const gameItem = button.parentElement;
            const randomGames = [
                'Online Cash Pash',
                'Snake and Dice',
                'Wine and Beer Twister',
                'Cricket Fantasy Online',
                'Many More'
            ];
            gameItem.textContent = `${randomGames[Math.floor(Math.random() * randomGames.length)]}`;
            button.remove();
        });
    }
    
    const removeButtons = document.querySelectorAll('.remove-game');
    removeButtons.forEach(button => attachRemoveEvent(button));
});


document.addEventListener('DOMContentLoaded', function() {
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    const savePopup = document.getElementById('save-popup');

    saveSettingsBtn.addEventListener('click', function() {
        // Save functionality can be implemented here (e.g., sending data to the server)
        savePopup.style.display = 'block';
        setTimeout(() => {
            savePopup.style.display = 'none';
        }, 3000); // Popup visible for 3 seconds
    });
});