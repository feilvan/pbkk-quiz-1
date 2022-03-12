import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import banner from './../img/banner.jpg';

export class Homepage00 extends Component {
    render() {
        return (
            <div className="flex flex-col place-items-center">
                <img src={banner} alt="Banner"/>
                <div className="text-center font-herosBoldItalic -mt-4 pb-16 text-[10rem] tracking-tighter">truclr <span className="text-outline-white">studio</span></div>
                <div className="flex flex-row space-x-6 font-herosBoldItalic tracking-widest uppercase">
                    <div>3DCG</div>
                    <div>Digital Imaging</div>
                    <div>Front-End</div>
                </div>
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