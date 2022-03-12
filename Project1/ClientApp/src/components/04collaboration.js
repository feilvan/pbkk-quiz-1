import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

export class Collab04 extends Component {
    render() {
        return (
            <div className="">
                <Link to="/q1" className="flex flex-row my-auto"><FaArrowLeft size={16} className="my-auto mr-2" /> Back</Link>
                <div className="text-center font-herosBoldItalic pt-4 pb-16 text-[10rem] tracking-tighter">Collaboration</div>
                <div>Brief description of your collaboration proposal to investor, partner & employee candidates</div>
            </div>
        );
    }
}