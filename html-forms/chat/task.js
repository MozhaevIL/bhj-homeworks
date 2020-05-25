const chatBadge = document.querySelector(".chat-widget__side");
const chatWidget = document.querySelector(".chat-widget");
const chatInput = document.getElementById("chat-widget__input");
const messages = document.querySelector( '.chat-widget__messages' );
let idleTimer = 0;

function getTimeStamp() {
    const timeStamp = `${new Date().getHours()}:${new Date().getMinutes()}`;
    return timeStamp;
}

function scrollToLast() {
    const container = document.querySelector(".chat-widget__messages-container");
    container.scrollTop = container.scrollHeight;
} 

function getAnswer() {
    const answers = [
        "Зачем вы мне пишете?",
        "А документы у вас есть?",
        "Так со своими детьми разговаривайте",
        "Вы скучный",
        "zzzzzzz..."
    ]
    const answerIndex = Math.floor(Math.random() * answers.length);

    messages.innerHTML += `
            <div class="message">
                <div class="message__time">${getTimeStamp()}</div>
                <div class="message__text">${answers[answerIndex]}</div>
             </div>
            `    
    scrollToLast();
}

function ifIdle() {
    messages.innerHTML += `
            <div class="message">
                <div class="message__time">${getTimeStamp()}</div>
                <div class="message__text">Ну и куда вы делись?</div>
             </div>
        `
    scrollToLast();
}


chatBadge.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
    idleTimer = setTimeout(ifIdle, 5000);
    }
)

chatInput.addEventListener("keyup", event => {
    if ((event.keyCode === 13) && (chatInput.value)) {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${getTimeStamp()}</div>
            <div class="message__text">${chatInput.value}</div>
         </div>
        `
        scrollToLast();
        clearTimeout(idleTimer);
        idleTimer = setTimeout(ifIdle, 5000);
        chatInput.value = null;

        setTimeout(getAnswer, 1000);

        } else if ((event.keyCode === 13) && (!chatInput.value)) {
            messages.innerHTML += `
            <div class="message">
                <div class="message__time">${getTimeStamp()}</div>
                <div class="message__text">Зачем вы пытаетесь отправить пустое сообщение?</div>
             </div>
            `
            scrollToLast();
    }
 }
)