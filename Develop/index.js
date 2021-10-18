// npm packages address
// ===Length email length requirements===
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const confirmLength = (value) => {
    if (value.length < 1) {
        return "Enter at least one character";
    }
    return true;
}

const confirmEmail = (value) => {
    if (value.length < 1) {
        return "Enter at least one character";
    } else if (!value.includes("@")) {
        return "Enter a valid email address"
    }
    return true;
}



// the array of questions
const questions = [
  {
    type: "input",
    message: "What is the title of this project?",
    name: "title",
    validate: confirmLength
  },

  {
    type: "input",
    message: "Write the description of this project?",
    name: "description",
    validate: confirmLength
  },

  {
    type: "input",
    message: "How users can install this project?",
    name: "installation",
    validate: confirmLength
  },

  {
    type: "input",
    message: "How users can use this project?",
    name: "usage",
    validate: confirmLength
  },

  {
    type: "list",
    message: "Which license do you want to use?",
    choices: ["MIT", "Apache", "ISC"],
    name: "license"
  },
  {
    type: "input",
    message: "What is the current year?",
    name: "year",
    validate: confirmLength
  },
  {
    type: "input",
    message: "What is the name of the license?",
    name: "fullName",
    validate: confirmLength
  },

  {
    type: "input",
    message: "How can users contribute to this project?",
    name: "contribution",
    validate: confirmLength
  },

  {
    type: "input",
    message: "What tests did you use?",
    name: "tests",
    validate: confirmLength
  },

  {
    type: "input",
    message: "What is your contact email address?",
    name: "email",
    validate: confirmEmail
  },

  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
    validate: confirmLength
  },

];

// readme generator Func
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("README was created!")
    )
}



// ======Init Function======
function init() {
    inquirer
        .prompt(questions)
            .then((data) => writeToFile("./README.md", data))
}

// Function call to initialize app
init();




