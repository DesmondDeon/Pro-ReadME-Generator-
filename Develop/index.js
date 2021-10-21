// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is the name of the Repository?',
            name: 'title',
            validate: (value) => {if(value){return true}else{return 'Please Name This Repository'}},
        },
        {
            type: 'input',
            message: 'Please describe your Repo?',
            name: "description", 
            validate: (value) => {if(value){return true}else{return 'Please Describe This Project'}},
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: "Installation", 
            validate: (value) => {if(value){return true}else{return 'What are the steps required to install your project?'}},

        },
        {
            type: 'input',
            message: 'How do you Use this Application?',
            name: "Usage", 
            validate: (value) => {if(value){return true}else{return 'Please Describe This Project'}},

        },
        {
            type: 'input',
            message: 'What is your Git Username?',
            name: 'github',
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
            name: 'contributing',
            validate: (value) => {if(value){return true}else{return 'Desmond Young'}},
        },
        {
            type: 'input',
            message: 'How did you test this Product?',
            name: 'test',
            validate: (value) => {if(value){return true}else{return 'Please list names of Repositories'}},
        },
        {
            type: 'list',
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
    .then(( data) => {
        console.log("Making ReadMe")
       const ReadMeBody = generateMarkdown(data)
         fs.writeFileSync("ReadMe.md", ReadMeBody);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();