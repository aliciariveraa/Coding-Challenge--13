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
  