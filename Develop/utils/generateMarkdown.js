// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; // i think this is problem #1
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![Repo Issues](https://img.shields.io/bitbucket/issues/DesmondDeon/Pro-ReadME-Generator-.svg)]()
  [![Forks](https://img.shields.io/github/forks/DesmondDeon/Pro-ReadME-Generator- .svg)]()
  [![Language](https://img.shields.io/github/languages/top/DesmondDeon/Pro-ReadME-Generator-.svg)]()

  
  # Table of Content
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Licenses](#licenses)
  *[Contributions](#contribution)
  *[Work](#work)
  *[Username](#username)
  *[Profile](#profile)

  ${github}
  ##username:

      ${description}
  ##description:
  
      ${data.installation}
  ##installation:
  
  ##License
      ${renderLicenseBadge(license)}
  
      ${contributions}
  ##contributions:
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
  Please make sure to update tests as appropriate.

      ${works}
  ##works:

  ##email:
  [${email}](mailto:${email})
  
      ${profile}
  ##profile:
  
  #Contacts
  * Github :${github}
  * Linkedin :${linkedin}
  * Email :${email}
  
Copyright (c) Desmond Young SP. All rights reserved.`; 
}

console.log(generateMarkdown)

module.exports = generateMarkdown;
