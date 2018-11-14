var app = new Vue({
    el: '#app',
    data: {
        guess: 0,
        message: 0
    },
    methods: {
        showAlertFunction: function() {
            console.log(this.guess, this.message)
            if(this.guess === Number(this.message)){
                alert('Guess matched ' + this.$data.message)
            } else {
                alert('incorrect guess')
            }
        }
    }
    
})

app.guess = Math.round(Math.random() * 10)
console.log(app.guess)