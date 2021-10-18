// TODO: Include packages needed for this application
const fs = require("fs");
const axios = require('axios');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is the name of the Repository?',
            name: 'name',
            validate: (value) => {if(value){return true}else{return 'Please Name This Repository'}},
        },
        {
            type: 'input',
            message: 'Why did you build this Repository?',
            description: 'description',
            validate: (value) => {if(value){return true}else{return 'Please Describe This Project'}},
        },
        {
            type: 'input',
            message: 'What is your Git Username?',
            name: 'github username',
            validate: (value) => {if(value){return true}else{return 'I need this value to continue '}},
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value) => {if(value){return true}else{return 'I need this value to continue '}},
        },
        {
            type: 'input',
            message: 'Who contributed to this repository?',
            name: 'contributers',
            validate: (value) => {if(value){return true}else{return 'Desmond Young'}},
        },
        {
            type: 'input',
            message: 'Which Respositories are simular? and Why?',
            name: 'works',
            validate: (value) => {if(value){return true}else{return 'Please list names of Repositories'}},
        },
        {
            type: 'checkbox',
            message: 'Which Licenses did you use? ',
            name: 'licenses',
            choices: ['MIT','GPLv3','Apache 2.0', 'GPL'],
            validate: (value) => {if(value){return true}else{return 'This value is needed to continue'}},
        }
    ];

// TODO: Create a function to write README file
const createNewFile = data => {
    return new Promise ((worked, issue) => {
            fs.writeFile(`./${filename.toLowercase().split(' ').join('')}.md`, data , err =>{
                if(err){
                    // console.log(err)
                    issue(err);
                    return;
                }

            worked({
                ok: true,
                message: 'Your ReadME is Ready!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .then(data => {
        return generateMarkdown(data)
    })
    .then(data => {
        return createNewFile(data)
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();