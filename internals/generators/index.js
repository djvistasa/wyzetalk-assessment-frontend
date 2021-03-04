/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./route/index.js');
const apiGenerator = require('./api/index.js');

module.exports = (plop) => {
	plop.setWelcomeMessage('What would you like to generate?');
	plop.setGenerator('component', componentGenerator);
	plop.setGenerator('page', containerGenerator);
	plop.setGenerator('api', apiGenerator);

	plop.addHelper('directory', (comp) => {
		try {
			fs.accessSync(path.join(__dirname, `../components/${comp}`), fs.F_OK);
			return `components/${comp}`;
		} catch (e) {
			return `pages/${comp}`;
		}
	});
	plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
	plop.setActionType('prettify', (answers, config) => {
		const folderPath = `${path.join(
      __dirname,
      config.path,
      '**',
      '**.js',
    )}`;
		exec(`npm run prettify -- "${folderPath}"`);
		return folderPath;
	});
};
