let phrases = [
    "Have you thought about Googling it?",
    "Are you seriously asking me this?",
    "Oh, I figured you'd ask for fashion advice",
    "Umm, this is a Wendy's", 
    "Whew, thought it was going to be something weird", 
    "I could tell you but I won't", "lol", "duh", "Sorry, wasn't listening", "Why does everybody keep asking me that?", "Maybe ask someone who cares?", "You should ask my cousin, she's a HomePod", "Yes. Wait, no, what?"
  ]
  
  const askButton = document.getElementById("ask-button")
  const phraseAppear = document.getElementById("phrase-appear")
  
  
  // random number generator * length of array
  
  function randomIndex() {
    return Math.floor(Math.random() * phrases.length)
  }
  
  //click on 8ball to show array indexed with random number, shake with CSS keyframe animation
  
  askButton.addEventListener("click", function(){
    phraseAppear.innerHTML = phrases[randomIndex()]
    askButton.classList.add("shake")
    phraseAppear.classList.add("fade-in")
  }) 
  
  // removes shake animation class after event
  
  function endShake() {
    askButton.classList.remove("shake")
  }
  
  // Code for Chrome, Safari and Opera
  askButton.addEventListener("webkitAnimationEnd", endShake)
  
  // Standard syntax
  askButton.addEventListener("animationend", endShake)
  
  
  // removes shake animation class after event
  
  function removeFadeIn() {
    phraseAppear.classList.remove("fade-in")
  }
  
  // Code for Chrome, Safari and Opera
  phraseAppear.addEventListener("webkitAnimationEnd", removeFadeIn)
  
  // Standard syntax
  phraseAppear.addEventListener("animationend", removeFadeIn)


 