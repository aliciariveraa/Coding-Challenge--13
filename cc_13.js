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
  

// Task 5 - Inline Editing for Employee Card

  function enableInlineEditing() {
    const cards = document.querySelectorAll('.employee-card');
  
    cards.forEach(card => {
      card.addEventListener('dblclick', function() {
        const nameElement = card.querySelector('h3');
        const positionElement = card.querySelector('p');
  
        // Replace text with input fields
        const nameInput = document.createElement('input');
        nameInput.value = nameElement.textContent;
  
        const positionInput = document.createElement('input');
        positionInput.value = positionElement.textContent;
  
        // Create a save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.onclick = function() {
          nameElement.textContent = nameInput.value;
          positionElement.textContent = positionInput.value;
  
          // Remove the input fields and save button
          card.removeChild(nameInput);
          card.removeChild(positionInput);
          card.removeChild(saveButton);
        };
  
        // Replace elements with input fields and save button
        card.appendChild(nameInput);
        card.appendChild(positionInput);
        card.appendChild(saveButton);
  
        // Remove original text content
        card.removeChild(nameElement);
        card.removeChild(positionElement);
      });
    });
  }
  
  // Example usage: Enable inline editing on employee cards
  enableInlineEditing();