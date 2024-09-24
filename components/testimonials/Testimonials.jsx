import React from "react";
import { FaQuoteLeft } from "react-icons/fa";



export default function Testimonials({ imgUrl, altText, name, testText, occupation }) {
    const testName = name || "Anonymous";
    const testOcc = occupation || "No Data";
    const testClass = imgUrl ? `div-blueTest` : `div-whiteTest`;


    if (imgUrl && testText) {
        return (
            <div className={testClass}>
                <div className="imgDiv">
                    <img src={imgUrl} className="testImg" alt={altText} />
                </div>
                <div className="testInfo">
                    <FaQuoteLeft />
                    <h3>{testText}</h3>
                    <strong><p className="testName">{testName}</p></strong>
                    <p className="testOcc">{testOcc}</p>
                </div>
            </div>
        );
    }

    // Optionally render a fallback UI if imgUrl or testText is missing
    return (
            <div className={testClass}>
                <div className="testInfo">
                    <FaQuoteLeft />
                    <h3>{testText}</h3>
                    <strong><p className="testName">{testName}</p></strong>
                    <p className="testOcc">{testOcc}</p>
                </div>
            </div>
        )
}