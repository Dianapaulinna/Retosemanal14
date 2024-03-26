

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}


const { writeFile } = require('fs/promises');
async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}

writeToFile('friends.txt', 'Diana');