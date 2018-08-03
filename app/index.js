var Generator = require('yeoman-generator');

module.exports = class extends Generator{
  constructor(args, opts) 
  {
    super(args, opts);    
  }

  writing() 
  {
    // copying manifest
    this.fs.copyTpl
    (    
      this.templatePath('manifest.json'),
      this.destinationPath('manifest.json')      
    );
    // copying popup    
    this.fs.copyTpl
    (
      this.templatePath('popup.html'),
      this.destinationPath('popup.html')  
    );    
    // copying readme
    this.fs.copyTpl
    (
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
    // copying images
    this.fs.copyTpl
    (
      this.templatePath('images/default.png'),
      this.destinationPath('images/default.png')
    );

    // copying js
    this.fs.copyTpl
    (
      this.templatePath('js/background.js'),
      this.destinationPath('js/background.js')
    );
    // { title: 'Templating with Yeoman' }
  }
};