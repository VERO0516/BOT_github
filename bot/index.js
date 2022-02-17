class GithubBot{
    constructor () {
      this.config = require('./config/puppeteer.json')
    }
  
    async init () {
      const puppeteer = require('puppeteer')
      this.browser = await puppeteer.launch({
        headless: this.config.settings.headless
      })
      this.page = await this.browser.newPage()
      await this.page.setViewport({ width: 1500, height: 764 })
    }
     

     async visitGithub() {
      const CREDS = require('./config/creds');
  
      await this.page.goto('https://github.com/login')
      await this.page.waitForTimeout(500)

      // username
      await this.page.waitForTimeout(1500)
      await this.page.focus(this.config.selectors.username_field)
      await this.page.keyboard.type(this.config.username)
  
      // password
      await this.page.waitForTimeout(1500)
      await this.page.focus(this.config.selectors.password_field)
      await this.page.keyboard.type(this.config.password)
  
      // On entre le clique sur le button de connexion
      await this.page.click(this.config.selectors.login_button)

  
    }
    
  }

  module.exports = GithubBot
  