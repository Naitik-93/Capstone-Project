const newsCards = document.querySelectorAll('.news-card');
const hlCards = document.querySelectorAll('.hl-card');
const navLinks = document.querySelectorAll('.nav a');
let clickCount = 0;

for (let i = 0; i < newsCards.length; i++) {
newsCards[i].addEventListener('click', function() {
    const title = this.querySelector('.news-title').textContent;
    showNewsAlert(title);
    clickCount = clickCount + 1;
    console.log('Total clicks: ' + clickCount);
});
}

hlCards.forEach(function(card) {
card.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'hsl(199, 89%, 95%)';
    this.style.cursor = 'pointer';
});
});

function filterNews(badgeType) {
for (let i = 0; i < newsCards.length; i++) {
    const badge = newsCards[i].querySelector('.news-badge').textContent;
    if (badgeType === 'ALL' || badge === badgeType) {
    newsCards[i].style.display = 'block';
    } else {
    newsCards[i].style.display = 'none';
    }
}
}


document.addEventListener('keydown', function(event) {
if (event.key === 'l' || event.key === 'L') {
    filterNews('LIVE');
}
if (event.key === 'a' || event.key === 'A') {
    filterNews('ALL');
}
});

newsCards.forEach(function(card, index) {
const likeBtn = document.createElement('button');
likeBtn.textContent = '❤️ Like';
likeBtn.style.marginTop = '1rem';
likeBtn.style.padding = '0.5rem 1rem';
likeBtn.style.border = '1px solid black';
likeBtn.style.borderRadius = '0.375rem';
likeBtn.style.backgroundColor = 'white';
likeBtn.style.color = 'hsl(199, 89%, 48%)';
likeBtn.style.cursor = 'pointer';
likeBtn.id = 'like-btn-' + index;

let likes = 0;

likeBtn.addEventListener('click', function(e) {
    likes = likes + 1;
    this.textContent = '❤️ ' + likes + ' Likes';
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
});

card.appendChild(likeBtn);
});



