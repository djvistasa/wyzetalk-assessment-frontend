/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
	description: 'Create a new page',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'What should it be called?',
			default: 'Home',
			validate: (value) => {
				if (/.+/.test(value)) {
					return componentExists(value) ? 'A component or route with this name already exists' : true;
				}

				return 'The name is required';
			}
		},{
			type: 'confirm',
			name: 'wantApiCalls',
			message: 'Will this route/page be making api calls?',
			default: false,
		},
	],
	actions: ({wantApiCalls}) => {
		// Generate index.js and index.test.js
		const componentTemplate = './route/route.js.hbs';

		const apiTemplate = './api/api.js.hbs';
    const exportTemplate = './api/export.js.hbs';
    const importTemplateLevelOne = './api/importLevelOne.js.hbs';
    const levelOneRegex = new RegExp(`\n\e`);
		const exportRegex = new RegExp('};');

		const actions = [{
			type: 'add',
			path: '../../src/pages/{{lowerCase name}}/index.jsx',
			templateFile: componentTemplate,
			abortOnFail: true
		}];

		if(wantApiCalls) {
			actions.push({
        type: 'add',
        path: '../../src/api/{{camelCase name}}/index.js',
        templateFile: apiTemplate,
        abortOnFail: true,
      },
      {
				type: 'modify',
				path: '../../src/api/index.js',
				pattern: levelOneRegex,
				separator: '',
				templateFile: importTemplateLevelOne,
				abortOnFail: true
			},
			{
				type: 'modify',
				path: '../../src/api/index.js',
				pattern: exportRegex,
				separator: '',
				templateFile: exportTemplate,
				abortOnFail: true
			},{
				type: 'prettify',
				path: '../../src/api'
			})
		}

		actions.push({
			type: 'prettify',
			path: '../../src/pages'
		});

		return actions;
	}
};
