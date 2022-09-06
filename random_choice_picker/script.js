const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea?.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag !== '');

  tagsElement.innerHTML = '';

  tags.forEach((tag) => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.innerText = tag;
    tagsElement?.appendChild(tagElement);
  });
}

function randomSelect() {
  let times = 30;
  let currentTag;

  const tags = document.querySelectorAll('.tag');
  if (tags.length <= 0) {
    return;
  }

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    if (currentTag) {
      unhighlightTag(currentTag);
    }
    highlightTag(randomTag);
    currentTag = randomTag;
    times--;

    if (times < 0) {
      clearInterval(interval);
    }
  }, 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  const randomNumber = Math.floor(Math.random() * tags.length);
  return tags[randomNumber];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
