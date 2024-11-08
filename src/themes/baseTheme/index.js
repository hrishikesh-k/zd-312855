/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

import chalk from 'chalk';
import CleanCSS from 'clean-css';
import sass from 'sass';

const sourceDir = path.join('./', 'src', 'themes');
const outputDir = path.join('./', 'dist', 'themes');

// Function to compile SCSS to CSS and minify it
function compileAndMinifySCSS(inputFile) {
  // Compile SCSS to CSS
  const result = sass.renderSync({
    file: inputFile,
    outputStyle: 'compressed',
  });

  return new CleanCSS().minify(result.css.toString()).styles;
}

// Function to write combined CSS to file
function writeCombinedCSS(outputFile, combinedCSS) {
  // Ensure directory exists
  const directory = path.dirname(outputFile);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  // Write combined CSS to file
  fs.writeFileSync(outputFile, combinedCSS);
  console.log(`✅ ${chalk.bold.bgGreen(`Combined and minified CSS saved to: ${outputFile}`)}`);
}

// Process index.scss file in the source directory
const files = fs.readdirSync(sourceDir);
const indexFiles = files.filter((file) => file === 'index.scss');

if (indexFiles.length > 0) {
  const indexPath = path.join(sourceDir, indexFiles[0]);
  const outputFile = path.join(outputDir, 'index.css');

  // Compile and minify index.scss
  const combinedCSS = compileAndMinifySCSS(indexPath);

  // Write combined CSS to file
  writeCombinedCSS(outputFile, combinedCSS);
} else {
  console.log(chalk.bold.red('Error: index.scss not found in the source directory.'));
}
