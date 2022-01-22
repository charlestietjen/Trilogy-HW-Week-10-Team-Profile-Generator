const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generate-html');
const inquirer = require('inquirer');
const fs = require('fs');

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
            type: 'input',
            name: 'office',
            message: "Enter manager's office number: ",
            // filter: specialFilter => {
            //     specialFilter = `Office #: ${specialFilter}`;
            // },
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
        this.promptHandler('addNew');
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
                message: "(optional) Enter engineer's github username: ",
                filter: specialFilter => {
                    return specialFilter = `GitHub: <a href="https://www.github.com/${specialFilter}">${specialFilter}</a>`;
                }
            }
        ])
        .then((a) => {
            let engineer = new Engineer(a.name, 'Engineer', a.id, a.email, a.github);
            this.employees.push(engineer);
            this.promptHandler('addNew');
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
                message: "(optional) Enter intern's school: ",
                filter: specialFilter => {
                    return specialFilter = `School: ${specialFilter}`;
                }
            }
        ])
        .then((a) => {
            let intern = new Intern(a.name, 'Intern', a.id, a.email, a.school);
            this.employees.push(intern);
            this.promptHandler('addNew');
        })
    }

    addNew() {
        return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'addConf',
                message: "Would you like to add another team member? ",
                default: false
            },
            {
                type: 'list',
                name: 'title',
                message: "Select the title of the employee you're adding. ",
                choices: ["Engineer", "Intern"],
                when: ({ addConf }) => addConf
            }
        ])
        .then((a) => {
            if (a.addConf){
                this.promptHandler(a.title.toLowerCase())
                return;
            };
            // console.log(this.employees[0].constructor.name);
            fs.writeFile('./dist/teamProfile.html', generateHTML(this.employees), err => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('./dist/teamProfile.html created.');
            })
            fs.copyFile('./src/bulma.min.css', './dist/bulma.min.css', err => {
                if (err){
                    console.log(err);
                    return;
                }
                console.log("./dist/bulma.min.css created.");
            })
        })
    };

    promptHandler(promptType) {
        switch(promptType){
            case 'manager':
                this.managerPrompt()
                break;
            case 'engineer':
                this.engineerPrompt()
                break;
            case 'intern':
                this.internPrompt()
                break;
            case 'addNew':
                this.addNew()
                break;
        }      
    }
}

const newForm = new ProfileForm;

newForm.promptHandler('manager');
// newForm.promptHandler('manager');
// .then(() => {console.log(newForm.employees)});
// .then(() => {addHandlerPrompt()});

module.exports = newForm.employees;