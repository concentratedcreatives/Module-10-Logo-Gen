<<<<<<< HEAD
const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Square, Circle } = require('./library/shapes.js');
const shapes = ['Triangle', 'Square', 'Circle'];

const composeImage = ({ text, characterColor, shape }) => `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white" />
  ${shape}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${characterColor}">${text}</text>
</svg>
`;


inquirer.prompt([
  { type: 'input', message: 'Logo text (up to 3 characters): ', name: 'text' },
  { type: 'input', message: 'Text color (keyword or hexcode): ', name: 'characterColor' },
  { type: 'list', message: 'Select a shape: ', name: 'shape', choices: shapes },
  { type: 'input', message: 'Shape color (keyword or hexcode): ', name: 'shapeColor' }
]).then(({ shape, ...answers }) => {
  const selectedShape = new (eval(shape))(); 
  selectedShape.setColor(answers.shapeColor);
  const image = composeImage({ ...answers, shape: selectedShape.render() });
  const filePath = './samples/logo.svg';
  fs.writeFile(filePath, image, (err) =>
    err ? console.error(err) : console.log(`Generated logo.svg`)
  );
});
=======
const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Square, Circle } = require('./library/shapes.js');
const shapes = ['Triangle', 'Square', 'Circle'];

const composeImage = ({ text, characterColor, shape }) => `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white" />
  ${shape}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${characterColor}">${text}</text>
</svg>
`;


inquirer.prompt([
  { type: 'input', message: 'Logo text (up to 3 characters): ', name: 'text' },
  { type: 'input', message: 'Text color (keyword or hexcode): ', name: 'characterColor' },
  { type: 'list', message: 'Select a shape: ', name: 'shape', choices: shapes },
  { type: 'input', message: 'Shape color (keyword or hexcode): ', name: 'shapeColor' }
]).then(({ shape, ...answers }) => {
  const selectedShape = new (eval(shape))(); 
  selectedShape.setColor(answers.shapeColor);
  const image = composeImage({ ...answers, shape: selectedShape.render() });
  const filePath = './samples/logo.svg';
  fs.writeFile(filePath, image, (err) =>
    err ? console.error(err) : console.log(`Generated logo.svg`)
  );
});
>>>>>>> 3858ae6d5eeb67ce2df34d92c63ea7a3359b210a
