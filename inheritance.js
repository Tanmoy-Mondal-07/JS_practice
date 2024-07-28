class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username${this.username}`);
    }
    createid(){
        return'12345'
    }
}

const x = new user("clash")
console.log(x.createid())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const llama = new teacher("llama","llama.ai")
console.log(llama.createid());