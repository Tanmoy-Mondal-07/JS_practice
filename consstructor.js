function user(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    return this
}

const userone = new user(1, 2, 3)
const usertwo = new user(4, 5, 6)
const userth = new user(7, 8, 9)

console.log(userone)