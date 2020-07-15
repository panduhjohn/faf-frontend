import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <>
                <div id='main-menu'>
                    <div className='logo'>
                        <NavLink to='/' id='nav-links'>
                            <img src="/images/awesome.png" alt="fafLogo" id='main-logo'/>
                        </NavLink>
                    </div>
                    <div className='inner-main-menu'>
                        <ul>
                            <li>
                                <NavLink to='/' id='nav-links'>
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/' id='nav-links'>
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/' id='nav-links'>
                                    Skydive
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/' id='nav-links'>
                                    Motorcycle
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/' id='nav-links'>
                                    Roamin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/' id='nav-links'>
                                    Brando
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
