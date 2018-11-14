var app = new Vue({
    el: '#app',
    data: {
        usname: '',
        pswd: '',
        usernameError: false,
        passwordError: false,
        usernameErrorMessage: [],
        passwordErrorMessage: ''
    },
    methods: {
        showValidation: function (){
                this.usernameError = false
                this.passwordError = false
                this.usernameErrorMessage = []

            if(this.pswd.length < 6){
                   
            }
            
            if(this.usname <= 3){
                this.usernameError = true
               this.usernameErrorMessage.push({msg: 'Username is too short', date: Date.now()})
               var passwordErrorMessage = {
                   msg: 'new Error Message',
                   date: Date.now()
               }
            }
            if(!this.usname.includes('@')){
                this.usernameError = true
                usernameErrorMessage.push({msg: 'Username must be a valid email address', date: Date.now()}) 
            }
        }
    }
})
console.log(app.usname, app.pswd)