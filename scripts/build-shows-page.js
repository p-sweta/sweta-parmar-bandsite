const shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]



// const showsList = document.querySelector('.main');
// const showsEl = document.createElement('section');
// showsEl.classList.add('shows');
// showsList.appendChild(showsEl);
// console.log(showsList);

const upcomingShows = (show) => {
const showsSectionEl = document.querySelector('.shows');
const headerEl = document.createElement('h2');
headerEl.classList.add('section__heading', 'shows__heading');
headerEl.innerText = 'Shows';
showsSectionEl.appendChild(headerEl);

const showsContainerEl = document.createElement('div');
showsContainerEl.classList.add('shows__container');
showsSectionEl.appendChild(showsContainerEl);

const showsInfoEl = document.createElement('div');
showsInfoEl.classList.add('shows__info');
showsContainerEl.appendChild(showsInfoEl);

const dateHeaderEl = document.createElement('h4');
dateHeaderEl.classList.add('shows__subheading');
dateHeaderEl.innerText = 'DATE';

const venueHeaderEl = document.createElement('h4');
venueHeaderEl.classList.add('shows__subheading');
venueHeaderEl.innerText = 'VENUE';

const locationHeaderEl = document.createElement('h4');
locationHeaderEl.classList.add('shows__subheading');
locationHeaderEl.innerText = 'LOCATION';

const emptyEl = document.createElement('h4');

showsInfoEl.append(dateHeaderEl, venueHeaderEl, locationHeaderEl, emptyEl);

const showsListContainerEl = document.createElement('div');
showsListContainerEl.classList.add('shows__list-container');
showsContainerEl.appendChild(showsListContainerEl);

/*******/
for(let i = 0; i < shows.length; i++) { 
    
const detailsContainerEl = document.createElement('div');
detailsContainerEl.classList.add('shows__details-container');
showsListContainerEl.appendChild(detailsContainerEl);

//date
const detailsDateEl = document.createElement('div');
detailsDateEl.classList.add('shows__details');
detailsContainerEl.appendChild(detailsDateEl);

const labelDateEl = document.createElement('h4');
labelDateEl.classList.add('shows__label');
labelDateEl.innerText = 'DATE';
detailsDateEl.appendChild(labelDateEl);

const dateEl = document.createElement('p');
dateEl.classList.add('shows__text', 'shows__text--date');
dateEl.innerText = show[i].date;
detailsDateEl.appendChild(dateEl);

//venue
const detailsVenueEl = document.createElement('div');
detailsVenueEl.classList.add('shows__details');
detailsContainerEl.appendChild(detailsVenueEl);

const labelVenueEl = document.createElement('h4');
labelVenueEl.classList.add('shows__label');
labelVenueEl.innerText = 'VENUE';
detailsVenueEl.appendChild(labelVenueEl);

const venueEl = document.createElement('p');
venueEl.classList.add('shows__text', 'shows__text--venue');
venueEl.innerText = show[i].venue;
detailsVenueEl.appendChild(venueEl);

//location
const detailsLocationEl = document.createElement('div');
detailsLocationEl.classList.add('shows__details');
detailsContainerEl.appendChild(detailsLocationEl);

const labelLocationEl = document.createElement('h4');
labelLocationEl.classList.add('shows__label');
labelLocationEl.innerText = 'LOCATION';
detailsLocationEl.appendChild(labelLocationEl);

const locationEl = document.createElement('p');
locationEl.classList.add('shows__text', 'shows__text--location');
locationEl.innerText = show[i].location;
detailsLocationEl.appendChild(locationEl);

//button
const btnEl = document.createElement('button');
btnEl.classList.add('shows__button');
btnEl.innerText = 'BUY TICKETS';
detailsContainerEl.appendChild(btnEl);
}

}

upcomingShows(shows);

{/* <section class="shows">
        <h2 class="section__heading shows__heading">Shows</h2>
        <div class="shows__container">
          <div class="shows__info">
            <h4 class="shows__subheading">DATE</h4>
            <h4 class="shows__subheading">VENUE</h4>
            <h4 class="shows__subheading">LOCATION</h4>
          </div>
          <div class = shows__list-container>
          <div class="shows__details-container">
            <div class="shows__details">
           -   <h4 class="shows__label">DATE</h4>
              <p class="shows__text shows__text--date">Mon Sept 06 2021</p>
            </div>
            <div class="shows__details">
              <h4 class="shows__label">VENUE</h4>
              <p class="shows__text shows__text--venue">Ronald Lane</p>
            </div>
            <div class="shows__details">
              <h4 class="shows__label">LOCATION</h4>
              <p class="shows__text shows__text--location">San Francisco, CA</p>
            </div>
            <button class="shows__button">BUY TICKETS</button>
          </div>
          <div class="shows__details-container">
            <div class="shows__details">
              <h4 class="shows__label">DATE</h4>
              <p class="shows__text shows__text--date">Mon Sept 06 2021</p>
            </div>
            <div class="shows__details">
              <h4 class="shows__label">VENUE</h4>
              <p class="shows__text shows__text--venue">Ronald Lane</p>
            </div>
            <div class="shows__details">
              <h4 class="shows__label">LOCATION</h4>
              <p class="shows__text shows__text--location">San Francisco, CA</p>
            </div>
            <button class="shows__button">BUY TICKETS</button>
          </div>
          </div>
        </div>
      </section> */}

 



 

 



 

 





 

 

