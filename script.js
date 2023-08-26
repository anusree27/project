const pastelColors = [
    "#AEC6CF",
    "#FFDDC1",
    "#FFABAB",
    "#FFC3A0",
    "#FF677D",
    // Add more pastel colors as needed
    "#F9CCCA",
    "#E0BBE4",
    "#A2CFF0",
    "#B4E7D7",
    "#FFD8B1",
    "#DAC0E8",
    "#E6A8A4",
    "#FFF4E0",
    "#F3B8A8",
    "#87CEEB",
  ];
  
  function checkAnswer(correctAnswer, nextRoom, wrongRoom) {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
  
    if (userAnswer === correctAnswer) {
       
      window.location.href = nextRoom;
    } else {
        
      document.body.style.backgroundColor = getRandomPastelColor();
      window.location.href = wrongRoom;
    }
  }

  
  function getRandomPastelColor() {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
  }
  
  function setRandomPastelBackgroundColor() {
    document.body.style.backgroundColor = getRandomPastelColor();
  }
  
  // Call the function to set a random pastel background color when the page loads
  window.addEventListener("load", setRandomPastelBackgroundColor);







