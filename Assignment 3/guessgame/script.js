function generateGuess(){
  return Math.round(Math.random() * 10)
}

const app = new Vue({
    el: "#app",
    data: {
      timer: 10,
      computerGuess: generateGuess(),
      numguess: 0,
      errors: [ ],
      showModal: true,
      failure: false,
      customMessage: " "
    },
    methods: {
      enter: function (){
        if(Number(this.computerGuess) === (this.numguess)){
          alert('Correct guess')
        }else{
          this.errors.push(true)
          if(this.errors.length >= 3)
          alert('You failed the game')
          this.error = [ ]
          this.timer = timerValue
          this.computerGuess === generateGuess
        }
      }
    }
  })

  function countDown(){
    app.timer--
    if(app.timer === 0){
     app.failure = true
      app.showModal = true
      app.success = false
      app.timer = 10
      app.customMessage = "The correct value was " + app.computerGuess
    }
  }
  setInterval(countDown, 1000)
  