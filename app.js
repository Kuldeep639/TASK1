const eventsList = document.getElementById('events-list');
const eventName = document.getElementById('event-name');
const eventDate = document.getElementById('event-date');
const eventLocation = document.getElementById('event-location');
const eventDescription = document.getElementById('event-description');

const eventListPage = document.getElementById('event-list');
const eventDetailsPage = document.getElementById('event-details');
const createEventPage = document.getElementById('create-event');

const eventForm = document.getElementById('create-event-form');

let events = [
    { id: 1, name: 'Event 1', date: '2023-01-19', location: 'Location 1', description: 'Description for Event 1' },
    { id: 2, name: 'Event 2', date: '2023-02-15', location: 'Location 2', description: 'Description for Event 2' },
    { id: 3,name:'Event 3',date:'2024-01-09',location:'Location 3',description:'Description for Event 3'},
    { id: 4,name:'Event 4',date:'2024-01-10',location:'Location 4',description:'Description for Event 4'},
    { id: 5,name:'Event 5',date:'2024-01-13',location:'Location 5',description:'Description for Event 5'},
];

function displayEventList() {
    eventsList.innerHTML = '';
    events.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${event.name}</strong> - ${event.date} - ${event.location} 
            <button onclick="displayEventDetails(${event.id})">Details</button>
            <button onclick="confirmDeleteEvent(${event.id})">Delete</button>`;
        eventsList.appendChild(li);
    });
}

function displayEventDetails(id) {
    const selectedEvent = events.find(event => event.id === id);
    eventName.textContent = selectedEvent.name;
    eventDate.textContent = selectedEvent.date;
    eventLocation.textContent = selectedEvent.location;
    eventDescription.textContent = selectedEvent.description;

    eventListPage.classList.add('hidden');
    createEventPage.classList.add('hidden');
    eventDetailsPage.classList.remove('hidden');
}

function goToEventList() {
    eventListPage.classList.remove('hidden');
    createEventPage.classList.add('hidden');
    eventDetailsPage.classList.add('hidden');
}

function confirmDeleteEvent(id) {
    if (window.confirm('Are you sure you want to delete this event?')) {
        deleteEvent(id);
    }
}

function deleteEvent(id) {
    events = events.filter(event => event.id !== id);
    displayEventList();
}

function createEvent(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    if (name && date && location && description) {
        const newEvent = {
            id: events.length + 1,
            name,
            date,
            location,
            description
        };

        events.push(newEvent);
        displayEventList();
        eventForm.reset();
        goToEventList();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayEventList();
});
