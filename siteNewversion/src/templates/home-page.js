import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

import { Carousel } from 'react-bootstrap'

import band1 from '../assets/img/metalica.jpg'
import band2 from '../assets/img/royalblood.jpg'
import band3 from '../assets/img/slayer.jpg'
import logo from '../assets/img/blackLogo.png'



const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      {/* <HomePageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        offerings={frontmatter.offerings}
        testimonials={frontmatter.testimonials}
      /> */}
      <Carousel>
        <Carousel.Item>
          <img src={logo} alt="first slide" style={{ width: `1600px`, height: `600px` }} />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: `rgba(0,0,0,.6)` }}>Cut the middle man out by using Rockimmortal!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={band1} alt="second slide" style={{ width: `1600px`, height: `600px` }} />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: `rgba(0,0,0,.6)` }}>Metalica show coming soon!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={band2} alt="third slide" style={{ width: `1600px`, height: `600px` }} />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: `rgba(0,0,0,.6)` }}>Royal Blood show coming soon!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={band3} alt="fourth slide" style={{ width: `1600px`, height: `600px` }} />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: `rgba(0,0,0,.6)` }}>Slayer show coming soon!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Event Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event A</td>
              <td>Date A</td>
              <td>Location A</td>
            </tr>
            <tr>
              <td>Event B</td>
              <td>Date B</td>
              <td>Location B</td>
            </tr>
            <tr>
              <td>Event C</td>
              <td>Date C</td>
              <td>Location C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
            markdownRemark(id: {eq: $id }) {
            frontmatter {
            title
        meta_title
          meta_description
          heading
          description
        offerings {
            blurbs {
            image
            text
        }
      }
        testimonials {
            author
          quote
        }
      }
    }
  }
`
