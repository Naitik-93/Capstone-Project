const newsCards = document.querySelectorAll('.news-card');
const hlCards = document.querySelectorAll('.hl-card');
const pageTitle = document.querySelector('.page-title');
let totalLikes = 0;

function createLikeButton() {
const btn = document.createElement('button');
btn.textContent = '👍 Like (0)';
btn.style.padding = '8px 16px';
btn.style.border = 'none';
btn.style.borderRadius = '5px';
btn.style.backgroundColor = 'hsl(142, 71%, 45%)';
btn.style.color = 'white';
btn.style.cursor = 'pointer';
return btn;
}

for (let i = 0; i < newsCards.length; i++) {
const card = newsCards[i];
let likeCount = 0;

const likeBtn = createLikeButton();
card.appendChild(likeBtn);

likeBtn.addEventListener('click', function(event) {
    likeCount++;
    totalLikes++;
    this.textContent = '👍 Like (' + likeCount + ')';
});

card.addEventListener('mouseenter', function() {
    this.style.borderColor = 'hsl(142, 71%, 45%)';
});
}

const bookmarks = [];
function createBookmarkBtn(card, index) {
const bookmarkBtn = document.createElement('button');
bookmarkBtn.textContent = '🔖 Bookmark';
bookmarkBtn.style.cssText = 'background: #fef3c7; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer; margin-left: 0.5rem; margin-top: 1rem;';

bookmarkBtn.addEventListener('click', function(e) {
    const title = card.querySelector('.news-title').textContent;
    
    if (bookmarks.includes(title)) {
    bookmarkBtn.textContent = '🔖 Bookmark';
    bookmarkBtn.style.background = '#fef3c7';
    } else {
    bookmarks.push(title);
    bookmarkBtn.textContent = '✅ Bookmarked';
    bookmarkBtn.style.background = '#d1fae5';
    }
    console.log('Bookmarks:', bookmarks);
});

card.appendChild(bookmarkBtn);
}

const allCards = document.querySelectorAll('.news-card');
for (let i = 0; i < allCards.length; i++) {
createBookmarkBtn(allCards[i], i);
}