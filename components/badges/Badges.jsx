import React from "react"
import classnames from "classnames"

export default function Badges({children, shape, className, color, ...rest}){
   
   let shapeClass = shape ? `div-${shape}` : `div-default`
   let colorClass = color ? `div-${color}` : `div-default`
   const allClasses = classnames(shapeClass, colorClass, className)
   
   
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}