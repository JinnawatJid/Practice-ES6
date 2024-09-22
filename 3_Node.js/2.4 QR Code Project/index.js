/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// Import required packages
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
  {
    type: 'input',
    name: 'url',
    message: 'Enter the URL you want to convert to a QR code:',
  },
])
.then((answers) => {
  const url = answers.url;

  const qrImage = qr.image(url, { type: 'png' });
  const qrFilePath = 'qr_code.png';
  
  qrImage.pipe(fs.createWriteStream(qrFilePath));
  console.log(`QR code saved as ${qrFilePath}`);

  const textFilePath = 'user_input.txt';
  fs.writeFileSync(textFilePath, url);
  console.log(`User input saved to ${textFilePath}`);
})
.catch((error) => {
  console.error('Error:', error);
});
