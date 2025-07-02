// Get referrences to the guest form
const form = document.getElementById('guest-form');
const guestList = document.getElementById('guest-list');
const guestInput = document.getElementById('guest-name');

let guestCount = 0;
const MAX_GUESTS = 10;

// List for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  // Get the guest name 
  const guestName = guestInput.value.trim();

  // Check if the input is empty
  if (guestName === '') {
    alert('Please enter a guest name.');
    return;
  }

  // Check if the guest list has reached its limit
  if (guestCount >= MAX_GUESTS) {
    alert('Guest list is full! Remove someone before adding more.');
    return;
  }

  // If all checks pass,add the guest to the list
  addGuest(guestName);
  guestInput.value = ''; 
});
t
function addGuest(name) {
  guestCount++;

  const li = document.createElement('li'); 
  li.className = 'guest-item';

  // creates a span to show the guest name
  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;

  // creates a container for the buttons
  const btnContainer = document.createElement('div');

  //creates a delete button 
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  deleteBtn.addEventListener('click', () => {
    guestList.removeChild(li);
    guestCount--;
  });

  // creates rsvp button
  const rsvpBtn = document.createElement('button');
  rsvpBtn.textContent = 'Attending';
  let attending = true;
  rsvpBtn.addEventListener('click', () => {e
    attending = !attending;
    rsvpBtn.textContent = attending ? 'Attending' : 'Not Attending';
    rsvpBtn.style.backgroundColor = attending ? '' : '#f99';
  });

  //create and format the timestamp when the guest was added
  const timestamp = document.createElement('span');
  const now = new Date();
  timestamp.textContent = now.toLocaleString();
  timestamp.style.fontSize = '0.8em';
  timestamp.style.marginLeft = '10px';

  btnContainer.appendChild(deleteBtn);
  btnContainer.appendChild(rsvpBtn);
  

  // Assembles the list item:Name + Timestamp +Buttons
  li.appendChild(nameSpan);
  li.appendChild(timestamp);
  li.appendChild(btnContainer);

  // Add the fully assembled list item to the guest list in the DOM
  guestList.appendChild(li);
}
