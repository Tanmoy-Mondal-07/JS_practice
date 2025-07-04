class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptpassword() {
        return `${this.password}abc`
    }
    changeusername() {
        return `${this.username.toUpperCase()}`
    }
}

const x = new user("xyz", "@.com", "123")

console.log(x.encryptpassword());
console.log(x.changeusername());

//behind the scene

function userx(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

userx.prototype.encryptpassword = function () {
    return `${this.password}xyz`
}

userx.prototype.changeusername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new userx("tea", "tea@gmail.com", "123")

console.log(tea.changeusername());
console.log(tea.encryptpassword());