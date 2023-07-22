import React from "react";

function DisplaySection({triggerPreview}) {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }


    return ( 

        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <title className="text">Brilliant</title>
            <span className="description">Same old proccessors but with new look!</span>
            <button className="button" onClick={triggerPreview}>Try me</button>
            <button className="back-button" onClick={handleScrollToTop}>TOP</button>
        </div>

    );
}

export default DisplaySection;