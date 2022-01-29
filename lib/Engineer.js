const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, title, id, email, github) {
        super(name, title, id, email);
        this.special = github;
    }
    getGithub(){
        return this.special;
    }
    getRole(){
        return this.title;
    }
}

module.exports = Engineer;