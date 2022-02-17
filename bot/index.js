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
  
      await this.page.goto('https://github.com/login')
      await this.page.waitForTimeout(500)
  
    }
    
  }

  module.exports = GithubBot
  