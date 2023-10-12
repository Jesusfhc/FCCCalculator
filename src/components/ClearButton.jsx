import React from "react";
import '../stylesheets/ClearButton.css'

function ClearButton(props) {
    return (<div className="clear-button"
    onClick={props.manejarClear}>
        Clear
    </div>)
};

export default ClearButton;