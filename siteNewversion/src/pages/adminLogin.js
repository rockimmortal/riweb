import React, { Component } from 'react';
import logo from '../assets/img/Logo.png';
import { Link } from "gatsby"

const adminLogin = () => (

    <div className="container">
        <div className="row">
            <div className="col-sm"></div>
            <div className="card col-sm" style={{
                textAlign:`center`
            }}>
                <div style={{
                    marginTop:`2em`,
                    marginBottom:`4em`
                }}>
                    <img src={logo} />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1" style={{width:`6em`}}>@Email</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1" style={{width:`6em`}}>Password</span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <Link to="/admin" className="btn btn-secondary" style={{
                    marginTop:`1em`,
                    marginBottom:`1em`
                }}>Log In</Link>

            </div>
            <div className="col-sm"></div>
        </div>
  </div>
)

export default adminLogin
