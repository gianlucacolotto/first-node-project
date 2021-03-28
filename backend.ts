import fs from 'fs';
import { read } from 'node:fs';

const readmeFile = fs.readFileSync('./README.md');
const readme = readmeFile.toString();

console.log(readme);

fs.writeFileSync('./README.copy.md', readme);