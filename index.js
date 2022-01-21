const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

class ProfileForm {
    constructor() {
        this.employees = [];
    }
    managerPrompt() {
        inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "Enter the name of the team's manager: ",
            validate: nameInput => {
                if (!nameInput) {
                    console.log('A manager name is required.');
                    return false;
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter manager's id number: `,
            validate: idInput => {
                if (!idInput) {
                    console.log("An employee number is required and should only contain numbers.");
                    return false;
                }
            return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email address: ",
            validate: emailInput => {
                if (!emailInput) {
                    console.log("An email address is required.");
                    return false;
                }
            return true;
            }
        },
        {
            type: 'number',
            name: 'office',
            message: "Enter manager's office number: ",
            validate: officeInput => {
                if (!officeInput) {
                    console.log("Manager office number is required.");
                    return false;
                }
            return true;
            }
        }
    ])
    .then((a) => {
        let manager = new Manager(a.name, 'Manager', a.id, a.email, a.office);
        this.employees.push(manager);
        this.engineerPrompt();
    })
    }

    engineerPrompt() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter engineer's name: ",
                validate: nameInput => {
                    if (!nameInput){
                        console.log("A name is required.");
                        return false;
                    }
                return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter engineer's employee ID number: ",
                validate: idInput => {
                    if (!idInput || isNaN(idInput)) {
                        console.log("An employee number is required and should only contain numbers.");
                        return false;
                    }
                return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter engineer's email address: ",
                validate: emailInput => {
                    if (!emailInput){
                        console.log("An email address is required.");
                        return false;
                    }
                return true;
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "(optional) Enter engineer's github username: "
            }
        ])
        .then((a) => {
            let engineer = new Engineer(a.name, 'Engineer', a.id, a.email, a.github);
            this.employees.push(engineer);
            this.internPrompt();
            // console.log(this.employees);
        })
    }

    internPrompt() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter intern's name: ",
                validate: nameInput => {
                    if (!nameInput){
                        console.log("A name is required.");
                        return false;
                    }
                return true;
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter intern's employee number: ",
                validate: idInput => {
                    if (!idInput){
                        console.log("An employee ID is required.");
                        return false;
                    }
                return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter intern's email address: ",
                validate: emailInput => {
                    if (!emailInput) {
                        console.log("An email address is required.");
                        return false;
                    }
                return true;
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "(optional) Enter intern's school: "
            }
        ])
        .then((a) => {
            let intern = new Intern(a.name, 'Intern', a.id, a.email, a.school);
            this.employees.push(intern);
            console.log(this.employees);
        })
    }
}

const newForm = new ProfileForm;

newForm.managerPrompt()
// .then(() => {console.log(newForm.employees)});
// .then(() => {addHandlerPrompt()});