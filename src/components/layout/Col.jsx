// src/components/layout/Col.jsx
import React from "react";

function Col({ children, className }) {

    const combinedClassName = `TWCOLUMN ${ className || "" }`;
    return <div className={combinedClassName}>{children}</div>;
}


export default Col;
