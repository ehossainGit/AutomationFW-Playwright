import * as fs from 'fs';
import * as path from 'path';

/* To run .ts file directrly use: npx tsx <reletivePath/yourFile.ts>
  make sure tsx is installed as a dev dependency or globally:
  e.g.: npm install tsx --save-dev
*/

interface MyData {
  name: string;
  age: number;
}

// Resolve path relative to the repository root (process.cwd()) so runtime can find the file
const filePath: string = path.join(process.cwd(), 'data', 'profile-admin.json'); 
let data: MyData;
fs.readFile(filePath, 'utf8', (err, jsonString) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  try {
    data = JSON.parse(jsonString);
    // You can now work with the 'data' object
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
  console.log('JSON data:', data);
});