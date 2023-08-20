# Iconoclastic

## Description

This project aims to use Object Oriented Programming to run a program through NodeJS that will ask the user for their choices and generate a logo with those choices. The user will be able to chose three characters, a shape (circle, triangle, and square), and a color for both letters and shape(provided by a color keyword or a hexadecimal number). Below are the User Story and Acceptance Criteria provided.

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
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
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

To install this project, the user must copy the repository files, install the dependencies by entering ```nmp install``` in their CLI.

## Usage

The project can be run after the installation steps above. The user must simply be in the project folder and enter ```node index.js``` to begin the program, questions will then be generated to fill out the README sections according to the Professional README Guide and the parameters in the acceptance criteria.

## Credits

## Contribute

Though this project is rather simple, anyone is welcome to use the code, modify it or expand upon it. Copy or fork the repository and you can push some changes up for review and/or approval.

## Tests

The tests for this application are provided in the ./library/tests folder. To run these tests after any modifications to the code, or curiosity. Navigate to the tests folder through the command line and enter ```npm run <name_of_test>```. There are tests for different attributes of this project, so there will be more than one test in the folder.

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
