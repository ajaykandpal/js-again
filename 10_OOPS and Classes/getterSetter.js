class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

// get and set are used when we need to play with data in class (hiding access, or encrypt password)
// note, if u define one of get or set, define both
// make function name as same property name
// conflict with constructor for who will set the property. So use underscore before the prop name.
// this will kinda make a new property.

//old syntax in properties_get_set.js 