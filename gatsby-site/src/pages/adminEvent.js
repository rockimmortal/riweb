import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from '../images/Logo.png'

const AdminEvent = () => (
  <Layout>
    <SEO title="Admin Event" />
    <div style={{
        marginTop:`25px`,
        marginLeft: `25px`,
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

        <div className="container d-flex justify-content-center" style={{
            border:`1px solid`,
        }}>
            <form>
                <div className="row">
                    <div className="form-group">
                        <div className="col d-flex justify-content-start">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Performer Name"/>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                </div>
                <textarea id="exampleFormControlTextarea1" rows="8" cols="118" placeholder="Event details/Description go here"></textarea>
            </form>
        </div>

    </div>

  </Layout>
)

export default AdminEvent