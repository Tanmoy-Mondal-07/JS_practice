class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}abc`
    }
    set password(value){
        this._password=value
    }
}

const x=new user('@gmail.com',12345)
console.log(x.password);