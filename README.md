# Iconoclastic

## Description

This project aims to use Object Oriented Programming to run a program through NodeJS that will ask the user for their choices and generate a logo with those choices. The user will be able to chose three characters, a shape (circle, triangle, and square), and a color for both letters and shape(provided by a color keyword or a hexadecimal number). The user is also prompted to name the generated logo's file. Below are the User Story and Acceptance Criteria provided.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created, named by the user
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the corresponding file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

To install this project, the user must copy the repository files and install the dependencies by entering ```npm install``` in their CLI. This project can only be viewed in NodeJS, so the user must have access to this functionality in their command line. This projects dependencies include Inquirer for the prompted questions, Jest for testing the shape generation, and Validate-Color to ensure that the user's color choice is valid.
The repository can be found at <https://github.com/Benhwaet/Iconoclastic>

## Usage

The project can be run after the installation steps above. The user must simply be in the main project folder and enter ```node index.js``` to begin the program, questions will then be generated to ask the user to choose a shape, a shape color, three characters, the text color, and the generated logo's file's name.
To view a video showing the app in use, visit <>

## Credits

The Reference folder contains the homework-demo image and the README was provided by edX through the Full-Stack Bootcamp hosted by the University of New Brunswick (UNB).
The README provided recommended the file structure for the project and gave a test example to verify the SVG generation.
The validate-color npm was taken to verify the color choices (it's a great package). I also consulted the class notes for the OOP module as a reference for code creation.
As always, some code was modified after consulting StackOverflow and Chris Sutton's Repo for this same project helped me target the answers to their corresponding shape by using the 'this' keyword, and specifying that the variables come from the answers given to the prompted questions (ex: this.text, answers.text).
<https://github.com/ChrisSutt/Vector-Logo-Maker-NodeJS>.

## Contribute

Though this project is rather simple, anyone is welcome to use the code, modify it or expand upon it. Copy or fork the repository and you can push some changes up for review and/or approval. Mostly, it could serve as a launching point for similar but more complicated generation projects.

## Tests

The tests for this application are provided in the ./lib/tests folder. To run these tests after any modifications to the code, navigate to the tests folder through the command line and enter ```npm run test```. There is only one test file, so there is no need to specify the test name.

## License

### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

"A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."

Please visit the sit below or the License file in the repository for more information.
<https://opensource.org/licenses/MIT>

## Questions

You can reach me through my GitHub or by email if you have and questions or comments.

GitHub: <https://www.github.com/Benhwaet>

email: <benhwaet@gmail.com>
