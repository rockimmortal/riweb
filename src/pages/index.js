import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image /><br></br>
    <div > 
      <h6><Link to="/calender/">Calender</Link> | < Link to="/news/">News</Link> | < Link to="/404/">Sign In</Link></h6>
      <form class="searchBar" action="/calender/">
      <input type="text" placeholder="..." name="search"></input>
      <button type="button" class="block">Search</button>
      </form>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/calender/">View All Upcoming Events</Link>
  </Layout>
)

export default IndexPage
