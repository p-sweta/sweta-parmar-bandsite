//adding a section for show section
// const showsList = document.querySelector('.main');
// const showsEl = document.createElement('section');
// showsEl.classList.add('shows');
// showsList.appendChild(showsEl);
// console.log(showsList);
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

//function for adding a shows section and inserting mutiple rows with show details with for loop 
const upcomingShows = (show) => {
  const showsSectionEl = document.querySelector(".shows");

  //<h2 class="section__heading shows__heading">Shows</h2>
  const headerEl = document.createElement("h2");
  headerEl.classList.add("section__heading", "shows__heading");
  headerEl.innerText = "Shows";
  showsSectionEl.appendChild(headerEl);

  //div that will contain subheaders and shows list container
  const showsContainerEl = document.createElement("div");
  showsContainerEl.classList.add("shows__container");
  showsSectionEl.appendChild(showsContainerEl);

  const showsInfoEl = document.createElement("div");
  showsInfoEl.classList.add("shows__info");
  showsContainerEl.appendChild(showsInfoEl);

  const dateHeaderEl = document.createElement("h4");
  dateHeaderEl.classList.add("shows__subheading", "shows__subheading--left");
  dateHeaderEl.innerText = "DATE";

  const venueHeaderEl = document.createElement("h4");
  venueHeaderEl.classList.add("shows__subheading", "shows__subheading--middle");
  venueHeaderEl.innerText = "VENUE";

  const locationHeaderEl = document.createElement("h4");
  locationHeaderEl.classList.add("shows__subheading", "shows__subheading--right");
  locationHeaderEl.innerText = "LOCATION";

  const emptyEl = document.createElement("h4");
  emptyEl.classList.add("shows__subheading");

  showsInfoEl.append(dateHeaderEl, venueHeaderEl, locationHeaderEl, emptyEl);

  const showsListContainerEl = document.createElement("div");
  showsListContainerEl.classList.add("shows__list-container");
  showsContainerEl.appendChild(showsListContainerEl);


//for loop for inserting rows with shows details
  for (let i = 0; i < show.length; i++) {
    const detailsContainerEl = document.createElement("div");
    detailsContainerEl.classList.add("shows__details-container", "shows__row");
    showsListContainerEl.appendChild(detailsContainerEl);

    //date
    const detailsDateEl = document.createElement("div");
    detailsDateEl.classList.add("shows__details", "shows__row");
    detailsContainerEl.appendChild(detailsDateEl);

    const labelDateEl = document.createElement("h4");
    labelDateEl.classList.add("shows__label");
    labelDateEl.innerText = "DATE";
    detailsDateEl.appendChild(labelDateEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("shows__text", "shows__text--date", "shows__row");
    let day = new Date(show[i].date);
    dateEl.innerText = date(day);
    detailsDateEl.appendChild(dateEl);

    //venue
    const detailsVenueEl = document.createElement("div");
    detailsVenueEl.classList.add("shows__details", "shows__row");
    detailsContainerEl.appendChild(detailsVenueEl);

    const labelVenueEl = document.createElement("h4");
    labelVenueEl.classList.add("shows__label");
    labelVenueEl.innerText = "VENUE";
    detailsVenueEl.appendChild(labelVenueEl);

    const venueEl = document.createElement("p");
    venueEl.classList.add("shows__text", "shows__text--venue", "shows__row");
    venueEl.innerText = show[i].place;
    detailsVenueEl.appendChild(venueEl);

    //location
    const detailsLocationEl = document.createElement("div");
    detailsLocationEl.classList.add("shows__details", "shows__row");
    detailsContainerEl.appendChild(detailsLocationEl);

    const labelLocationEl = document.createElement("h4");
    labelLocationEl.classList.add("shows__label");
    labelLocationEl.innerText = "LOCATION";
    detailsLocationEl.appendChild(labelLocationEl);

    const locationEl = document.createElement("p");
    locationEl.classList.add("shows__text", "shows__text--location", "shows__row");
    locationEl.innerText = show[i].location;
    detailsLocationEl.appendChild(locationEl);

    //button
    const btnEl = document.createElement("button");
    btnEl.classList.add("shows__button", "shows__row");
    btnEl.innerText = "BUY TICKETS";
    detailsContainerEl.appendChild(btnEl);
  }

const rows = document.querySelectorAll(".shows__row");

rows.forEach((row) => {
  row.addEventListener("click", () => {
    rows.forEach((row) => {
      row.classList.remove("shows__row--selected");
    });
    row.classList.add("shows__row--selected");
  });
});
};


const addShows = (show) => {
  axios.get(
    "https://project-1-api.herokuapp.com/showdates?api_key=7d36c33f-9d98-40cc-a580-2c9c3af42073"
    )
    .then((response) => {
      upcomingShows(response.data)
    })
    .catch(error => {
    console.error("Something went wrong, try again.")
  });

}
addShows();

