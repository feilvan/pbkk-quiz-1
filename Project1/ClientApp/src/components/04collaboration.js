import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import banner from './../img/collab.jpg';
import client from './../img/client.png';

export class Collab04 extends Component {
    render() {
        return (
            <div className="mt-8">
                <Link to="/q1" className="flex flex-row text-white font-herosItalic tracking-widest"><span className="border rounded-md px-2 py-2 mr-4"><FaArrowLeft size={16} className="my-auto" /></span><span className="my-auto">Back</span></Link>
                <img src={banner} alt="Banner" className="mt-12" />
                <div className="absolute font-herosBoldItalic text-outline-white ml-12 -mt-2 text-[6rem] tracking-tighter">Collaboration</div>
                <div className="font-herosBoldItalic ml-4 -mt-4 mb-16 text-[6rem] tracking-tighter">Collaboration</div>
                <div className="mt-24 font-herosBoldItalic text-3xl tracking-tighter">Notable Client & Collabs</div>
                <img src={client} alt="Banner" className="mt-4" />
                <div className="flex flex-row mt-16 space-x-12 text-xl">
                    <div className="basis-3/4">
                        Let us be part of your history. We stay true to our goals, that is to only produce the best looking prouct for your business needs.
                    </div>
                    <div className="basis-1/4">
                        <div className="font-herosBoldItalic text-3xl tracking-tighter">Contact Us</div>
                        <div>feilvanfeilvan@gmail.com</div>
                    </div>
                </div>
            </div>
        );
    }
}