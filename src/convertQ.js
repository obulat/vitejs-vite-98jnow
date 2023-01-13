import { readFileSync, writeFileSync } from 'fs';
import { convertMdToHtml } from './convert/convert_md.js';

const fname = 'ortaokul_isbo_2022.json';

const rawFilesDir = './src/assets/raw/';
const processedFilesDir = './src/assets/';

const questionsRaw = readFileSync(`${rawFilesDir}${fname}`);
const questions = JSON.parse(questionsRaw);

const processed = [];
for (let q of questions) {
  const parsedQuestion = await convertMdToHtml(q.question);
  processed.push({ ...q, question: parsedQuestion });
}

console.log('Parsed:', processed);

const path = `${processedFilesDir}${fname}`;

try {
  writeFileSync(path, JSON.stringify(processed, null, 2), 'utf8');
  console.log('Data successfully saved to disk');
} catch (error) {
  console.log('An error has occurred ', error);
}
