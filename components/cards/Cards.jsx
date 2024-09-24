import React from "react";
import classnames from "classnames";
import { FaCloudUploadAlt, FaCity, FaBowlingBall, FaAngry } from "react-icons/fa";


export default function Cards({children, topText, botText, variant}){
    const variantClass = variant ? `div-${variant}` : "";
    const allClasses = classnames("image-container", variantClass)
    
    let icon = ""
    
    if (variant === "cloud"){
        icon = <FaCloudUploadAlt />
    }   else if (variant === "city") {
        icon = <FaCity />
    } else if (variant === "ball") {
        icon = <FaBowlingBall />
    } else {
        icon = <FaAngry />

    }
    
    if (topText && botText){
        
        return(
        <>
            <div className="card-container">
                <div className={allClasses}>
                    <p>{icon}</p>
                </div>
                <div className="card-details">
                    <h3>{topText}</h3>
                    <p>{botText}</p>
                </div>
            </div>
        </>
    )
    } else {
        return (
            <>
            <div className="card-container">
                <div className={allClasses}>
                    <p>{icon}</p>
                </div>
                <div className="card-details">
                    <h3>Please Give me the prop "topText"</h3>
                    <p>Please give me the prop "botText"</p>
                </div>
            </div>
        </>
        )
    }
    
    
}