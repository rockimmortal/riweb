import React, { Component } from 'react'
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  InstapaperIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import config from '../../../config'
import './styles.sass'

class Share extends Component {
  render () {
    const { title, slug, excerpt, mobile } = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    //const url = config.siteUrl + realPrefix + slug

    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : '')

    return (
      <div className='social-links'>
        <a href="https://gmail.com">
        <TelegramIcon round size={iconSize} />
        </a> 
        <div></div>  
        <a href="https://twitter.com/rockimmortalsf">
        <TwitterIcon round size={iconSize} />
        </a> 
        <div></div>
        <a href="https://www.facebook.com/RockImmortalProductions/">
        <FacebookIcon round size={iconSize} />
        </a> 
        <div></div>
      </div>
    )
  }
}

export default Share
