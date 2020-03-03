import React, { Component } from 'react'
import { Route, Switch, Link, BrowserRouter, withRouter } from 'react-router-dom'

// page
import Dashboard from '../../pages/Dashboard'


class Content extends Component {

    render () {
        return (
            <div className="page-wrapper">
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-7 align-self-center">
                            <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">Good Morning Jason!</h3>
                            <div className="d-flex align-items-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb m-0 p-0">
                                        <li className="breadcrumb-item">
                                            <BrowserRouter>
                                                <Link to="/dashboard">Dashboard</Link>
                                            </BrowserRouter>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-5 align-self-center">
                            <div className="customize-input float-right">
                                <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                                    <option value="0">Aug 19</option>
                                    <option value="1">July 19</option>
                                    <option value="2">Jun 19</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="card-group">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/admin-master" component={Dashboard} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
                <footer className="footer text-center text-muted"> All Rights Reserved by Adminmart. Designed and Developed by
                    <BrowserRouter>
                        <Link to="#"> WrapPixel</Link>.
                    </BrowserRouter>
                </footer>
            </div>
        )
    }
}

export default Content
