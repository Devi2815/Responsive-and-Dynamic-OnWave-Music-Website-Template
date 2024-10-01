let listsDiv = document.querySelector(".lists")
let barsIcon = document.getElementById("Bars")
let searchBtn = document.querySelector(".see")
let searchBar = document.querySelector(".search")
let messageDiv = document.querySelector("#message");
let chatCardDiv = document.querySelector(".chartCard");
let chattingDiv = document.querySelector(".chatting");
let startChatDiv = document.querySelector("#startChat");


function Saw(){
    searchBar.classList.toggle("active2")
}
function barsClick(){
    listsDiv.classList.toggle("active1")
    barsIcon.classList.toggle("fa-close")
}
function chatBox(){
    chatCardDiv.classList.toggle("active")
}
function chatStart(){
    chattingDiv.style.display = "flex";
}

const navBar = document.querySelector(".nav");
window.onscroll = function () {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navBar.classList.add("nav-colored");
    } else {
        navBar.classList.remove("nav-colored");
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            }
        });
    }
});


function observeCards(cardClass) {
    const cards = document.querySelectorAll(cardClass);
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(card => {
        observer.observe(card);
    });
}

observeCards('.sub-card');
observeCards('.sub-card2');
observeCards('.sub-card3');



document.addEventListener('DOMContentLoaded', () => {
    const transitionLinks = document.querySelectorAll('.transition-link');
    const loader = document.getElementById('loader');
    const showLoader = () => {
        loader.style.display = 'block';
    };
    transitionLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            showLoader();
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 3000);
        });
    });
});



function subscribe() {
    const notification = document.getElementById('notification');
    notification.innerHTML = 'Subscribed!';
    showNotification();
}
function sendRequest() {
    const notification = document.getElementById('notification');
    notification.innerHTML = 'Request sent successfully!';
    showNotification();
    chatCardDiv.style.display = "none";
}
function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}