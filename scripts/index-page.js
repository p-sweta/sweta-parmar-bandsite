const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

//adding a section for comments
// const conversation = document.querySelector('.conversation');

// //<section class="comments">
// const commentSection = document.createElement('section');
// commentSection.classList.add('comments');
// conversation.appendChild(commentSection);
// // console.log(conversation);

// function
const insertComment = (comment) => {
  const commentSectionEl = document.querySelector(".comments");

  //<div class="comments__container">
  const commentsContainerEl = document.createElement("div");
  commentsContainerEl.classList.add("comments__container");
  commentSectionEl.appendChild(commentsContainerEl);

  // <div class="comments__image-placeholder"></div>
  const imagePlaceholderEl = document.createElement("div");
  imagePlaceholderEl.classList.add("comments__image-placeholder");
  commentsContainerEl.appendChild(imagePlaceholderEl);

  // <div class="comments__info">
  const commentsInfoEl = document.createElement("div");
  commentsInfoEl.classList.add("comments__info");
  commentsContainerEl.appendChild(commentsInfoEl);

  // <h4 class="comments__heading">name</h4>
  const commentsHeadingEl = document.createElement("h4");
  commentsHeadingEl.classList.add("comments__heading");
  commentsHeadingEl.innerText = comment.name;
  commentsInfoEl.appendChild(commentsHeadingEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("comments__date");
  dateEl.innerText = comment.date;
  commentsInfoEl.appendChild(dateEl);

  const commentEl = document.createElement("p");
  commentEl.classList.add("comments__comment");
  commentEl.innerText = comment.comment;
  commentsInfoEl.appendChild(commentEl);

  return commentsContainerEl;
};

for (let i = 0; i < comments.length; i++) {
  insertComment(comments[i]);
}

//function for getting today's date
const todaysDate = (date) => {
  let mm = date.getMonth() + 1;
  if (mm < 10) {
    mm = "0" + mm;
  }
  let dd = date.getDate();
  if (dd < 10) {
    dd = "0" + dd;
  }
  let yyyy = date.getFullYear();

  return mm + "/" + dd + "/" + yyyy;
};

//function for adding a new comment
const displayComment = (event) => {
  event.preventDefault();

  const commentSectionEl = document.querySelector(".comments");
  //<div class="comments__container">
  const commentsContainerEl = document.createElement("div");
  commentsContainerEl.classList.add("comments__container");
  commentSectionEl.appendChild(commentsContainerEl);

  // <div class="comments__image-placeholder"></div>
  const imagePlaceholderEl = document.createElement("div");
  imagePlaceholderEl.classList.add("comments__image-placeholder");
  commentsContainerEl.appendChild(imagePlaceholderEl);

  // <div class="comments__info">
  const commentsInfoEl = document.createElement("div");
  commentsInfoEl.classList.add("comments__info");
  commentsContainerEl.appendChild(commentsInfoEl);

  // <h4 class="comments__heading">name</h4>
  const commentsHeadingEl = document.createElement("h4");
  commentsHeadingEl.classList.add("comments__heading");
  commentsHeadingEl.innerText = event.target.fullName.value;
  commentsInfoEl.appendChild(commentsHeadingEl);

  const dateEl = document.createElement("p");
  let today = new Date();
  dateEl.innerText = todaysDate(today);
  dateEl.classList.add("comments__date");
  commentsInfoEl.appendChild(dateEl);

  const commentEl = document.createElement("p");
  commentEl.classList.add("comments__comment");
  commentEl.innerText = event.target.comment.value;
  commentsInfoEl.appendChild(commentEl);

  const formEl = document.querySelector("form");
  formEl.reset();
};

//event listener for adding comments on submit
const formEl = document.querySelector("form");
formEl.addEventListener("submit", displayComment);
