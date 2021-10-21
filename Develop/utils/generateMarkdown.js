// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license; // i think this is problem #1
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    yourLicense = "N/A"
  }
  return yourLicense;
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `# ${data.title}
  [![Repo Issues](https://img.shields.io/bitbucket/issues/${data.github}/${data.title}.svg)]()
  [![Forks](https://img.shields.io/github/forks/${data.github}/${data.title}.svg)]()
  [![Language](https://img.shields.io/github/languages/top/${data.github}/${data.title}.svg)]()



  ## Description 
  ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  
  ## Usage 
  ${data.Usage}
  
  ## Installation
  ${data.installation}
  
  
  ## License
  ${renderLicenseBadge(data.licenses)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}

  ## Contacts
  * Github :${data.github}
  * Email :${data.email}
  
Copyright (c) All rights reserved
  `
}


// function generateMarkdown(data) {
//   return `# ${data.title}
//   [![Repo Issues](https://img.shields.io/bitbucket/issues/DesmondDeon/Pro-ReadME-Generator-.svg)]()
//   [![Forks](https://img.shields.io/github/forks/DesmondDeon/Pro-ReadME-Generator- .svg)]()
//   [![Language](https://img.shields.io/github/languages/top/DesmondDeon/Pro-ReadME-Generator-.svg)]()

  
//   # Table of Content
//   *[Description](#description)
//   *[Installation](#installation)
//   *[Usage](#usage)
//   *[Licenses](#licenses)
//   *[Contributions](#contribution)
//   *[Work](#work)
//   *[Username](#username)
//   *[Profile](#profile)

//   ${data.github}
//   ##username:

//       ${data.description}
//   ##description:
  
  
//   ##License
//       ${renderLicenseBadge(data.licenses)}
  
//       ${data.contributers}
//   ##contributions:
//   Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
//   Please make sure to update tests as appropriate.

//       ${data.works}
//   ##works:

//   ##email:
//   [${data.email}](mailto:${data.email})
  
//       ${data.profile}
//   ##profile:
  
//   #Contacts
//   * Github :${data.github}
//   * Email :${data.email}
  
// Copyright (c) Desmond Young SP. All rights reserved.`; 
// }

console.log(generateMarkdown)

module.exports = generateMarkdown;
