import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import banner from './../img/truclr transparent.png';

export class Homepage00 extends Component {
    render() {
        return (
            <div className="flex flex-col place-items-center">
                <img src={banner} alt="Banner" />
                <div className="flex flex-row mt-8 pb-8 space-x-6 font-heros tracking-widest">
                    <Link to="/q1/profile" className="btn-custom">Profile</Link>
                    <Link to="/q1/company" className="btn-custom">Company</Link>
                    <Link to="/q1/service" className="btn-custom">Service</Link>
                    <Link to="/q1/collaboration" className="btn-custom">Collaboration</Link>
                </div>
            </div>
        );
    }
}