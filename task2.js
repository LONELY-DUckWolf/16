class User {
    constructor(userInfo) {
       this.name = userInfo.name
       this.age = userInfo.age
       this.followers = userInfo.followers
        

    }

    showInfo() {
        return `name ${this.name} age ${this.age} followers ${this.followers}`
    }
}

const mango = new User ({
    name: "Beluga",
    age: 18,
    followers: 900
})

console.log(mango.showInfo())