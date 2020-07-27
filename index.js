const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const {managerQuestions, internQuestions, engineerQuestions} = require('./lib/questions');

const managerArr = [];
const engineerArr = [];
const internArr = []; 
const employeeArr = [];

const getManager = function() {
    inquirer.prompt(managerQuestions).then(answers => {
        const {name, id, email, officeNumber, anotherMember} = answers;
        let manager = new Manager(name, id, email, officeNumber);
        let managerObj = {
            role: manager.getRole(),
            name: manager.getName(),
            id: manager.getId(),
            email: manager.getEmail()
        };
        employeeArr.push(managerObj);
        generatePage(anotherMember);
        
    })
}

const getEngineer = function() {
    inquirer.prompt(engineerQuestions).then(answers => {
        const {name, id, email, github, anotherMember} = answers;
        let engineer = new Engineer(name, id, email, github);
        let engineerObj = {
            role: engineer.getRole(),
            name: engineer.getName(),
            id: engineer.getId(),
            email: engineer.getEmail(),
            github: engineer.getGithub()
        };
        employeeArr.push(engineerObj);
        generatePage(anotherMember);
        
    })
}

const getIntern = function() {
    inquirer.prompt(internQuestions).then(answers => {
        const {name, id, email, school, anotherMember} = answers;
        let intern = new Intern(name, id, email, school);
        let internObj = {
            role: intern.getRole(),
            name: intern.getName(),
            id: intern.getId(),
            email: intern.getEmail(),
            school: intern.getSchool()
        };
        employeeArr.push(internObj);
        generatePage(anotherMember);
        
    })
}

const generatePage = function(anotherMember) {
    if (anotherMember === 'Engineer') {
        getEngineer();
    } else if (anotherMember === 'Intern') {
        getIntern();
    } else {
        console.log(employeeArr)
        // gernateHTML()
    }
}

// function to write HTML file
function writeToFile(data) {
    
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;

        console.log('Generating HTML file in /dist folder...');
    });
}

getManager();

module.exports = [employeeArr];