import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import banner from './../img/service.jpg';
import di from './../img/di.jpg';
import cg from './../img/3dcg.jpg';

export class Service03 extends Component {
    render() {
        return (
            <div className="mt-8 mb-8">
                <Link to="/q1" className="flex flex-row text-white font-herosItalic tracking-widest"><span className="border rounded-md px-2 py-2 mr-4"><FaArrowLeft size={16} className="my-auto" /></span><span className="my-auto">Back</span></Link>
                <img src={banner} alt="Banner" className="mt-12" />
                <div className="absolute font-herosBoldItalic text-outline-white ml-12 -mt-2 text-[6rem] tracking-tighter">Service</div>
                <div className="font-herosBoldItalic ml-4 -mt-4 mb-16 text-[6rem] tracking-tighter">Service</div>
                <div className="text-xl">
                    Here's some of our past works
                </div>
                <img src={di} alt="Digital Imaging" className="mt-16" />
                <div className="ml-4 -mt-4 font-herosBoldItalic text-3xl tracking-[.5em] uppercase">Digital Imaging</div>
                <img src={cg} alt="3DCG" className="mt-16" />
                <div className="ml-4 -mt-4 font-herosBoldItalic text-3xl tracking-[.5em] uppercase">3D CG</div>
            </div>
        );
    }
}