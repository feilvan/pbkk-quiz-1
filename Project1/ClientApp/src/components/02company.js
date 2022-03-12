import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

export class Company02 extends Component {
    render() {
        return (
            <div className="">
                <Link to="/q1" className="flex flex-row my-auto"><FaArrowLeft size={16} className="my-auto mr-2" /> Back</Link>
                <div className="text-center font-herosBoldItalic pt-4 pb-16 text-[10rem] tracking-tighter">Company</div>
                <div>Brief description of your company</div>
            </div>
        );
    }
}