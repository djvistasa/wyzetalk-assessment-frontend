/**
 * Container Generator
 */

module.exports = {
  description: 'Create a new api',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Auth',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }

        return "The name is required";
      }
    }
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const componentTemplate = './api/api.js.hbs';
    const exportTemplate = './api/export.js.hbs';
    const importTemplateLevelOne = './api/importLevelOne.js.hbs';
    const levelOneRegex = new RegExp(`\n\e`);
		const exportRegex = new RegExp('};');
    const actions = [
      {
        type: 'add',
        path: '../../src/api/{{camelCase name}}/index.js',
        templateFile: componentTemplate,
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
			},
    ];


    actions.push({
      type: 'prettify',
      path: '../../src/api/',
    });

    return actions;
  },
};
