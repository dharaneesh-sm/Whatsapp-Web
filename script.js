const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');

document.querySelectorAll('.block').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('person').firstChild.textContent = this.dataset.name;
        document.getElementById('photo').src = this.dataset.img;
    });
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
     
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble');

        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes()}`;

        messageBubble.innerHTML = `
            <span class="message-text">${messageText}</span>
            <span class="message-time">${time}</span>
        `;

        messageContainer.appendChild(messageBubble);

        messageInput.value = '';

        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {    
        sendMessage();
    }
});