import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

class MenuParentSelf extends Component {

    constructor(props)
    {
        super(props)
        this.props = props
    }

    handleClickLink(url){
    }

    render () {
        return (
            <BrowserRouter>
                <Link to={this.props.menuParentLoc} onClick={this.handleClickLink(this.props.menuParentLoc)} className="sidebar-link" aria-expanded="false">
                    <i className={this.props.menuParentIcon}></i>
                    <span className="hide-menu">{this.props.menuParentName}</span>
                </Link>
            </BrowserRouter>
        )
    }
}

export default MenuParentSelf
