/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs"

const prompt = inquirer.createPromptModule()
inquirer
  .prompt([
    {"message": "Type Your URL: ", "name": "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream('qr-img1.png'));  
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
  })
    console.log("URL Code successfully generated!");
  })
  .catch((error) => {
    if (error) {
      console.error('Error saving URL:', error);
    } else {
      console.log('URL saved to URL.txt');
    }
  });
