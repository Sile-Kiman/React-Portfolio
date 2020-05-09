import React from "react";
import './resume.css'
import Resumeform from '../../images/Sile-Kiman.pdf'

export default function Resume() {

    return (
    <div  class="resume">            
    <embed src= {Resumeform} type="application/pdf" width="100%" height="700px"/>
    </div>
    );
}