function setusername(username) {
    this.username=username
}

function createuser(username,email,password) {      //cant directly pass and set value in js
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const x=new createuser("clash","clash@.ai","12345")
console.log(x);