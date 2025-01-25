

const Account = function ( {login, email}) {
    this.login = login;
    this.email = email;
    this.showInfo = function () {
        return `this acc has login ${this.login} and email ${this.email}`;
    };

};

const mango = new Account({
    login: "MangoBeluga",
    email: "beluga@gmail.com"
})

console.log(mango.showInfo())
