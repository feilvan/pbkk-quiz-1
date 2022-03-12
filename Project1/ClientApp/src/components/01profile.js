import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

export class Profile01 extends Component {
    render() {
        return (
            <div className="">
                <Link to="/q1" className="flex flex-row my-auto mt-[20rem] text-white font-herosItalic uppercase tracking-widest"><FaArrowLeft size={16} className="my-auto mr-2" /> Back</Link>
                <div className="font-herosBoldItalic pt-24 pb-12 text-[6rem] tracking-tighter">Profile</div>
                <div>
                    <div><span className="font-herosBoldItalic">truclr</span> (pronounced "true colors") is a group of 5 peoples specialized in digital imaging art.</div>
                    <div>Profile of your startup</div>
                </div>
            </div>
        );
    }
}