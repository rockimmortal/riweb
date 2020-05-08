import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import Share from '../Share'
import PropTypes from 'prop-types'
import logo from '../../assets/img/Logo.png'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <img src={logo} alt="Black Logo"></img>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    {/* <section className='hero is-primary is-bold is-small'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-11 is-offset-0'>
              <div className='section'>
                <h1 className='title' >
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-11 is-offset-0'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-1'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                 {/* <Offerings gridItems={offerings.blurbs} /> */} 
                <table>
  <tr>
    <th>Event Name</th>
    <th>Event Date</th>
    <th>Event Location</th>
  </tr>
  <tr>
    <td>Band A</td>
    <td>Feb 20, 2020</td>
    <td>Venue A</td>
  </tr>
  <tr>
    <td>Band B</td>
    <td>Feb 21, 2020</td>
    <td>Venue B</td>
  </tr>
  <tr>
    <td>Band C</td>
    <td>Feb 22, 2020</td>
    <td>Venue C</td>
  </tr>
</table>
                {/* <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
