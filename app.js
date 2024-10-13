const pop = document.querySelector(".model")
const messagesContainer = document.getElementById('messages');
const inputMessage = document.getElementById('input-message');
const sendBtn = document.getElementById('send-btn');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');

const botResponses = [
    'Hello!',
    'How are you?',
    'I am a bot!',
    'Nice to meet you.',
    'Have a great day!',
    'What are you doing?',
    'That’s interesting!',
    'I am learning too!'
];

toggleSidebarBtn.onclick = function() {
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    const timeDiv = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeDiv.classList.add('time');
    timeDiv.textContent = currentTime;

    messageDiv.textContent = text;
    messageDiv.appendChild(timeDiv);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

sendBtn.onclick = function() {
    const messageText = inputMessage.value.trim();
    if (messageText) {
        addMessage(messageText, 'user');
        inputMessage.value = '';

        setTimeout(() => {
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            addMessage(randomResponse, 'bot');
        }, 1000);
    }
}

inputMessage.onkeydown = function(e) {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
}
