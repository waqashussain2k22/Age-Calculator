function calculateAge() {
    let birthYearInput = document.getElementById('birthYear');
    let birthYear = birthYearInput.value;
  
    if (!birthYear || birthYear < 1900 || birthYear > new Date().getFullYear()) {
      alert('Please enter a valid birth year.');
      return;
    }
  
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    
    let result = document.getElementById('result');
    result.innerHTML = "You are " + age + " years old.";
  }
  