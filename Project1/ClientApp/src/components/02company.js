import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import banner from './../img/company.png';

export class Company02 extends Component {
    render() {
        return (
            <div className="mt-8">
                <Link to="/q1" className="flex flex-row text-white font-herosItalic tracking-widest"><span className="border rounded-md px-2 py-2 mr-4"><FaArrowLeft size={16} className="my-auto" /></span><span className="my-auto">Back</span></Link>
                <img src={banner} alt="Banner" className="mt-12" />
                <div className="absolute font-herosBoldItalic text-outline-white ml-12 -mt-2 text-[6rem] tracking-tighter">Company</div>
                <div className="font-herosBoldItalic ml-4 -mt-4 mb-16 text-[6rem] tracking-tighter">Company</div>
                <div className="text-xl">
                    <div>In <span className="font-herosBoldItalic">truclr</span>, we only serve the best looking product possible. <span className="font-herosBoldItalic">As everyone keeping their true colors</span></div>
                </div>
            </div>
        );
    }
}