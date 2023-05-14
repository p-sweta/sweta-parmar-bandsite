api_key: "7d36c33f-9d98-40cc-a580-2c9c3af42073";

//**************/
function clearComment() {
  const commentSectionEl = document.querySelector(".comments");
  while (commentSectionEl.firstChild) {
    commentSectionEl.removeChild(commentSectionEl.firstChild);
  }
}

//function for getting today's date
const date = (date) => {
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
const displayComment = (comments) => {
  comments.forEach((comment) => {
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
    let day = new Date(comment.timestamp);
    dateEl.innerText = date(day);
    dateEl.classList.add("comments__date");
    commentsInfoEl.appendChild(dateEl);

    const commentEl = document.createElement("p");
    commentEl.classList.add("comments__comment");
    commentEl.innerText = comment.comment;
    commentsInfoEl.appendChild(commentEl);
  });
};

const addComments = (comment) => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=7d36c33f-9d98-40cc-a580-2c9c3af42073"
    )
    .then((response) => {
      clearComment();
      displayComment(
        response.data.sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
      );
    })
    .catch((error) => {
      console.error("Something went wrong, try again.");
    });
};

addComments();

//event listener for adding comments on submit

const formEl = document.querySelector("form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.fullName.value;
  const comment = e.target.comment.value;

  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=7d36c33f-9d98-40cc-a580-2c9c3af42073",
      { name: name, comment: comment }
    )
    .then((response) => {
      addComments(response.data);
    })
    .catch((error) => {
      console.error("Something went wrong, try again.");
    });

  const formEl = document.querySelector("form");
  formEl.reset();
});

const deleteComment = (id) => {
  axios
    .delete(
      `https://project-1-api.herokuapp.com/comments/${id}?api_key=7d36c33f-9d98-40cc-a580-2c9c3af42073`
    )
    .then((response) => {
      addComments();
    });
};

// deleteComment("8d6f9437-99a2-4dad-b0f0-b8479697f10d");
