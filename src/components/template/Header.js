import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

class Header extends Component {

    render () {
        return (
            <header className="topbar" data-navbarbg="skin6">
                <nav className="navbar top-navbar navbar-expand-md">
                    <div className="navbar-header" data-logobg="skin6">
                        <span className="nav-toggler waves-effect waves-light d-block d-md-none">
                            <i className="ti-menu ti-close"></i>
                        </span>
                        <div className="navbar-brand">
                            <BrowserRouter>
                                <Link to="/index.html">
                                    <b className="logo-icon">
                                        <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                    </b>
                                    <span className="logo-text">
                                        <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                                    </span>
                                </Link>
                            </BrowserRouter>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle pl-md-3 position-relative"
                                    id="bell"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <span><i data-feather="bell" className="svg-icon"></i></span>
                                    <span className="badge badge-primary notify-no rounded-circle">5</span>
                                </span>
                                <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
                                    <ul className="list-style-none">
                                        <li>
                                            <div className="message-center notifications position-relative">
                                                <span className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                    <div className="btn btn-danger rounded-circle btn-circle">
                                                        <i data-feather="airplay" className="text-white"></i>
                                                    </div>
                                                    <div className="w-75 d-inline-block v-middle pl-2">
                                                        <h6 className="message-title mb-0 mt-1">Luanch Admin</h6>
                                                        <span className="font-12 text-nowrap d-block text-muted">Just see the my new admin!</span>
                                                        <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="nav-link pt-3 text-center text-dark">
                                                <strong>Check all notifications </strong>
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i data-feather="settings" className="svg-icon"></i>
                                </span>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <BrowserRouter>
                                        <Link className="dropdown-item" to="#">Action</Link>
                                    </BrowserRouter>
                                </div>
                            </li>
                            <li className="nav-item d-none d-md-block">
                                <div className="customize-input nav-link">
                                    <select className="custom-select form-control bg-white custom-radius custom-shadow border-0">
                                        <option value="1">AB</option>
                                        <option value="3">BE</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav float-right">
                            <li className="nav-item d-none d-md-block">
                                <form className="nav-link" >
                                    <div className="customize-input">
                                        <input
                                            className="form-control
                                            custom-shadow custom-radius border-0 bg-white"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search" />
                                        <i className="form-control-icon" data-feather="search"></i>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="../assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle" width="40" />
                                    <span className="ml-2 d-none d-lg-inline-block">
                                        <span>Hello,</span>
                                        <span className="text-dark">Jason Doe</span>
                                        <i data-feather="chevron-down" className="svg-icon"></i>
                                    </span>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                    <span className="dropdown-item">
                                        <i data-feather="user" className="svg-icon mr-2 ml-1"></i> My Profile
                                    </span>
                                    <span className="dropdown-item">
                                        <i data-feather="credit-card" className="svg-icon mr-2 ml-1"></i> My Balance
                                    </span>
                                    <span className="dropdown-item">
                                        <i data-feather="mail" className="svg-icon mr-2 ml-1"></i> Inbox
                                    </span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item">
                                        <i data-feather="settings" className="svg-icon mr-2 ml-1"></i> Account Setting
                                    </span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item">
                                        <i data-feather="power" className="svg-icon mr-2 ml-1"></i> Logout
                                    </span>
                                    <div className="dropdown-divider"></div>
                                    <div className="pl-4 p-3">
                                        <span className="btn btn-sm btn-info"> View Profile</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
