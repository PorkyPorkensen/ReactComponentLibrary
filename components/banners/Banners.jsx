import React from "react";
import classnames from "classnames";
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

export default function Banners({ children, line, className, variant, topText, botText, ...rest }) {
  const lineClass = line ? `div-${line}` : "";
  const variantClass = variant ? `div-${variant}` : "";
  const allClasses = classnames(variantClass, lineClass, className);

  let icon;
  if (variant === "success") {
    icon = <FaCheckCircle className="icon" />;
  } else if (variant === "warning") {
    icon = <FaExclamationTriangle className="icon" />;
  } else if (variant === "error") {
    icon = <FaTimesCircle className="icon" />;
  } else {
    icon = <FaInfoCircle className="icon" />;
  }

  if (line === "multiline") {
    return (
      <div className="bannerDiv">
        <div className={allClasses} {...rest}>
          <strong><p>{icon}{topText}</p></strong>
          <p className="bottomText">{botText}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bannerDiv">
        <div className={allClasses} {...rest}>
          <p>
            <strong>
              {icon}
              {children}
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

// <strong>
//           <p><FaCheckCircle className="icon" />Congratulations!</p>
//         </strong>
//         <p className="bottomText">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
//         </p>