const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email); //H@HC.COM. Note, we dont execute .email. It behaves as a property itself
console.log(tea._email); //h@hc.com

// the purpose if to treat _email as kinda private property, so outside people doesnt know its existence. They interact only with .email
// new proposal, to use # for private property. simply wont have access