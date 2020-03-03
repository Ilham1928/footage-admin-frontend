import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

class MenuParent extends Component {

    constructor(props)
    {
        super(props)
        this.props = props
    }

    render () {
        return (
            <BrowserRouter>
                <Link to={this.props.menuParentLoc} className="sidebar-link has-arrow" aria-expanded="false">
                    <i className={this.props.menuParentIcon}></i>
                    <span className="hide-menu">{this.props.menuParentName}</span>
                </Link>
            </BrowserRouter>
        )
    }
}

export default MenuParent
