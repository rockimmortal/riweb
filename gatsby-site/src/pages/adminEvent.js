import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from '../images/Logo.png'

import CreateEvent from '../components/createEvent'

import 'bootstrap/dist/css/bootstrap.min.css';

const AdminEvent = () => (
  <Layout>
    <SEO title="Admin Event" />
    <div style={{
        marginTop:`25px`,
        marginLeft: `25px`,
        marginBottom:`25px`
    }}>
        <div className="row">
            <div className="col">
                <img src={logo}/>
            </div>

            <div className="col text-center">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" autocomplete="off" checked/> Admin Home
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autocomplete="off"/> Events
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autocomplete="off"/> Manage Users
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autocomplete="off"/> Reporting
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autocomplete="off"/> ?
                        </label>
                    </div>
                    <form style={{
                        marginTop:`10px`
                    }}>
                        <div className="form-group">
                            <textarea id="exampleFormControlTextarea1" rows="6" cols="55"></textarea>
                        </div>
                    </form>
            </div>
        </div>

        <div style={{
            textAlign:`center`,
        }}>

            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> New Event
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option2" autocomplete="off"/> Manage Event
                </label>
            </div>
        </div>
{/* Seperate to component */}
        <CreateEvent />
{/* Seperate to component */}
    </div>

  </Layout>
)

export default AdminEvent