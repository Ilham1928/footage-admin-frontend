import React, { Component } from 'react'
import MenuChild from '../menu/MenuChild'
import MenuParent from '../menu/MenuParent'
import MenuParentSelf from '../menu/MenuParentSelf'

class Sidebar extends Component {

    constructor(props){
        super(props)
        this.state = {
            class: 'sidebar-item'
        }
    }

    render () {
        return (
            <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar" data-sidebarbg="skin6">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className={this.state.class} >
                                <MenuParentSelf
                                    menuParentName="Dashboard"
                                    menuParentLoc="/dashboard"
                                    menuParentIcon="icon-home"
                                />
                            </li>
                            <li className="list-divider"></li>
                            <li className="nav-small-cap">
                                <span className="hide-menu">Applications</span>
                            </li>
                            <li className={this.state.class} >
                                <MenuParent
                                    menuParentName="Manage Admin"
                                    menuParentLoc="#"
                                    menuParentIcon="icon-people"
                                />
                                <ul aria-expanded="false" className="collapse first-level base-level-line">
                                    <MenuChild
                                        location="/admin-master"
                                        menuName="Admin Master"
                                    />
                                    <MenuChild
                                        location="/admin-role"
                                        menuName="Admin Role"
                                    />
                                    <MenuChild
                                        location="/admin-activity"
                                        menuName="Admin Activity"
                                    />
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
};

export default Sidebar
