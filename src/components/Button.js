import React from 'react'

const Button = ( {text, textColor, bgColor, textTransform, cursor, gradientColorStops, fontWeight, fontSize} ) => {
    return (
        <button 
            type='button'
            className={`py-2 px-4 
            ${textColor} 
            ${bgColor} outline-none rounded-md 
            ${textTransform} 
            ${cursor} 
            ${gradientColorStops} 
            ${fontWeight} 
            ${fontSize}`}>
            {text}
        </button>
    )
}

export default Button