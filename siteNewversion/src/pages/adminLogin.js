import React, { Component } from 'react';
import logo from '../assets/img/Logo.png';
import { Link } from "gatsby"

const adminLogin = () => (

    <div class="container">
        <div class="row">
            <div class="col-sm"></div>
            <div className="card col-sm" style={{
                textAlign:`center`
            }}>
                <div style={{
                    marginTop:`2em`,
                    marginBottom:`4em`
                }}>
                    <img src={logo} />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <Link to="/admin" className="btn btn-secondary" style={{
                    marginTop:`1em`,
                    marginBottom:`1em`
                }}>Log In</Link>

            </div>
            <div class="col-sm"></div>
        </div>
  </div>
)

export default adminLogin
