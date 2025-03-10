// Task 2 - Employee Cards Dynamic Addition

function addEmployeeCard(name, position) {
    const employeeContainer = document.getElementById('employeeContainer');
  
    // Create a new employee card
    const card = document.createElement('div');
    card.classList.add('employee-card');
  
    // Create name and position elements
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    const positionElement = document.createElement('p');
    positionElement.textContent = position;
  
    // Create the Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function (event) {
      // Remove the card when the button is clicked
      employeeContainer.removeChild(card);
      event.stopPropagation(); // Prevent bubbling
    };
  
    // Append the elements to the card
    card.appendChild(nameElement);
    card.appendChild(positionElement);
    card.appendChild(removeButton);
  
    // Append the card to the container
    employeeContainer.appendChild(card);
  }
  
  // Example usage
  addEmployeeCard("John Doe", "Software Engineer");
  addEmployeeCard("Jake Foe", "Product Manager");
  

  // Task 3 - Bulk Update on Employee Cards

  function updateAllEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    const cardsArray = Array.from(cards); // Convert NodeList to array
  
    cardsArray.forEach(card => {
      card.style.backgroundColor = '#0000FF'; ; // Apply a background color change
      card.style.border = '2px solid #333'; // Add a border for highlighting
    });
  }
  
  // Example usage
  updateAllEmployeeCards();
  

  // Task 4 - Employee Card Removal with Event Bubbling

// Parent container listener for event bubbling
document.getElementById('employeeContainer').addEventListener('click', function(event) {
    if (event.target !== event.currentTarget) {
      console.log('Card clicked!');
    }
  });
  
  // Employee card removal function
  function addEmployeeCard(name, position) {
    const employeeContainer = document.getElementById('employeeContainer');
  
    // Create a new employee card
    const card = document.createElement('div');
    card.classList.add('employee-card');
  
    // Create name and position elements
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    const positionElement = document.createElement('p');
    positionElement.textContent = position;
  
    // Create the Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function (event) {
      // Remove the card when the button is clicked
      employeeContainer.removeChild(card);
      event.stopPropagation(); // Prevent bubbling
    };
  
    // Append the elements to the card
    card.appendChild(nameElement);
    card.appendChild(positionElement);
    card.appendChild(removeButton);
  
    // Append the card to the container
    employeeContainer.appendChild(card);
  }
  

    

  