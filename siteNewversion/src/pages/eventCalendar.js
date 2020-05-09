import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CreateEvent from '../components/AdminComp/createEvent'

import 'bootstrap/dist/css/bootstrap.min.css';

const EventCalendar = () => (
  <Layout>
    <SEO title="Admin Event" />
    <iframe src="https://calendar.google.com/calendar/embed?src=ri.events.cal%40gmail.com&ctz=America%2FLos_Angeles" style={{border:`solid 1px #777`, width:`100vw`, height:`80vh`, frameborder:`0`, scrolling:`no`}}></iframe>

  </Layout>
)

export default EventCalendar