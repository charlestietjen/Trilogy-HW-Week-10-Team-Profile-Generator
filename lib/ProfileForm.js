const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const { writeFile, copyFile } = require('../utils/fileHandler');
const generateHtml = require('../src/generateHtml');

class ProfileForm {
    constructor() {
        this.teamName;
        this.employees = [];
    }
    addEmployee(type) {
        inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter this ${type}'s name: `,
            validate: nameInput => {
                if (!nameInput) {
                    console.log("A name is required.");
                    return false;
                }
            return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter ${type}'s employee ID number: `,
            validate: idInput => {
                if (!idInput) {
                    console.log("An employee ID is required.");
                    return false;
                }
            return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter ${type}'s work email address: `,
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
            name: 'special',
            message: `(Optional) Enter ${type}'s office number: `,
            filter: specialFilter => {
                return `Office #: ${specialFilter}`
            },
            when: _specialWhen => type === 'Manager'
        },
        {
            type: 'input',
            name: 'special',
            message: `(Optional) Enter ${type}'s GitHub username: `,
            filter: specialFilter => {
                return `GitHub: <a href="https://www.github.com/${specialFilter}">${specialFilter}</a>`
            },
            when: _specialWhen => type === 'Engineer'
        },
        {
            type: 'input',
            name: 'special',
            message: `(Optional) Enter the name of ${type}'s school: `,
            filter: specialFilter => {
                return `School: ${specialFilter}`
            },
            when: _specialWhen => type === 'Intern'
        }
        ])
        .then((a) => {
            let e;
            switch(type){
                case 'Manager':
                    e = new Manager(a.name, type, a.id, a.email, a.special);
                    break;
                case 'Engineer':
                    e = new Engineer(a.name, type, a.id, a.email, a.special);
                    break;
                case 'Intern':
                    e = new Intern(a.name, type, a.id, a.email, a.special);
                    break;
            }
            this.employees.push(e)
            this.addNew();
        })    
    };
    addNew() {
        inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'addConf',
                message: 'Would you like to add another team member?',
                default: false
            },
            {
                type: 'list',
                name: 'title',
                message: "Select the title of the employee you're adding.",
                choices: ["Engineer", "Intern"],
                when: ({ addConf }) => addConf
            }
        ])
        .then((a) => {
            if (a.addConf){
                this.addEmployee(a.title);
                return;
            };
            writeFile(this.teamName, generateHtml(this.employees, this.teamName));
            copyFile();
        })
    }
    formStart() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                default: 'My Team',
                message: 'Enter a name for this team: '
            }
        ])
        .then(({ name }) => {
            this.teamName = name;
            this.addEmployee('Manager');
        })
    }
}

module.exports = ProfileForm;