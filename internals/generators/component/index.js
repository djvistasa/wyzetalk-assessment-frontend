/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Create a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component or route with this name already exists' : true;
        }

        return 'The name is required';
      }
    },
    {
      type: 'confirm',
      name: 'wantStyledComp',
      default: true,
      message: 'Do you want this to be a styled component?'
    },
  ],
  actions: (data) => {

    const exportTemplate = './component/export.js.hbs';
    const componentTemplate = './component/component.js.hbs';
    const styledComponentTemplate = './component/styledComponent.js.hbs';
    const importTemplateLevelOne = './component/importLevelOne.js.hbs';
    const levelOneRegex = new RegExp(`\n\e`);
    const exportRegex = new RegExp('};');

    const actions = [
      {
        type: 'add',
        path: `../../src/components/{{camelCase name}}/index.jsx`,
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/components/index.js',
        pattern: levelOneRegex,
        separator: '',
        templateFile: importTemplateLevelOne,
        abortOnFail: true
      },

      {
        type: 'modify',
        path: '../../src/components/index.js',
        pattern: exportRegex,
        separator: '',
        templateFile: exportTemplate,
        abortOnFail: true
      },


    ];


    // If they want a styled component
    if (data.wantStyledComp) {
      actions.push({
        type: 'add',
        path: `../../src/components/{{camelCase name}}/styledComponents/index.js`,
        templateFile: styledComponentTemplate,
        abortOnFail: true
      });
    }

    actions.push({
      type: 'prettify',
      path: '../../src/components/'
    });

    return actions;
  }
};
