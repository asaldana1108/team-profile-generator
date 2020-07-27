const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your manager's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your manager's e-mail!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log("Please enter your manager's office number!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'anotherMember',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Done!']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your engineer's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your engineer's e-mail!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's Github username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your engineer's GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'anotherMember',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Done!']
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's id?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your intern's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's e-mail address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your intern's e-mail!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your intern's school?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter your intern's school!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'anotherMember',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Done!']
    }
];

module.exports = { managerQuestions, internQuestions, engineerQuestions }