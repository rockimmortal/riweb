module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":2048},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#000000","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"","includeInDevelopment":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"ROCK IMMORTAL","short_name":"Business","start_url":"/index.html","background_color":"#000000","theme_color":"#000000","display":"standalone","icons":[{"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
