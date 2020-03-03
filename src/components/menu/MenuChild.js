import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import history from '../../history'

export default class MenuChild extends Component {

    constructor(props)
    {
        super()
        this.props = props
    }

    handleClick(location)
    {
        history.push(location)
    }

    render () {
        return (
            <li className="sidebar-item">
                <span className="sidebar-link" onClick={() => this.handleClick(this.props.location)}>
                    <span className="hide-menu"> {this.props.menuName} </span>
                </span>
            </li>
        )
    }
}
