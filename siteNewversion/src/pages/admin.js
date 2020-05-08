import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import logo from '../images/Logo.png'

import CreateEvent from '../components/AdminComp/createEvent'

import 'bootstrap/dist/css/bootstrap.min.css';

const AdminEvent = () => (
  <Layout>
    <SEO title="Admin Event" />

        <CreateEvent />

  </Layout>
)

export default AdminEvent