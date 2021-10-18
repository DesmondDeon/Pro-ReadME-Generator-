// TODO: Include packages needed for this application
const fs = require("fs");
const axios = require('axios');
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");
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
const createNewFile = ReadMeFile => {
    return new Promise ((worked, error) => {
            fs.writeFile(`./${filename.toLowercase().split(' ').join('')}.md`,data,()=>{
                if(err){
                    // console.log(err)
                    error(err);
                    return;
                }

            worked({
                ok: true,
                message: 'Your ReadME is Ready!'
            });
        });
    },

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .then(ReadMeFile => {
        return generateMarkdown(ReadMeFile)
    })
    .then(ReadMeFile => {
        return createNewFile(ReadMeFile)
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
