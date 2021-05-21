"use strict"

import React, { useState } from "react";
import ReactDOM from "react-dom";
import ProgressBar from "./ProgressBar"; 

function ProgressBarSample() {
    var [prcnt, setPrcnt] = useState(0);
    setTimeout(function increment() {
        if (prcnt < 100) {
            setPrcnt(prcnt+=10);
            setTimeout(increment, 1000);
        }
    }, 1000)
    return (<ProgressBar percent={prcnt}/>)
}

function ProgressBarSample_WithPercents() {
    var [prcnt, setPrcnt] = useState(0);
    setTimeout(function increment() {
        if (prcnt < 100) {
            setPrcnt(prcnt+=10);
            setTimeout(increment, 1000);
        }
    }, 1000)
    return (<ProgressBar percent={prcnt} show="True"/>)
}

var mountNode = document.getElementById("app");
ReactDOM.render(
    <div>
        <ProgressBarSample/><br/>
        <ProgressBarSample_WithPercents/><br/>
    </div>, mountNode);
