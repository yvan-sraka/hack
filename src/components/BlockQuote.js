"use strict"

import React from 'react';
import '../css/rstrtt.css';

function BlockQuote(props) {
    if (!props["data"]) return null;
    return (<blockquote>{props["data"]}</blockquote>);
}

export default BlockQuote;
