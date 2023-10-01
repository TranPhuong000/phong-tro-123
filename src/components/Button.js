import React, { memo } from 'react'


const Button = ( {text, textColor, bgColor, textTransform, cursor, gradientColorStops, fontWeight, fontSize, onClick, width} ) => {
    console.log('re-render')
    return (
        <button 
            type='button'
            className={`py-2 px-4
            ${textColor} 
            ${bgColor} outline-none rounded-lg text-xl gap-5 
            ${textTransform} 
            ${cursor} 
            ${gradientColorStops} 
            ${fontWeight} 
            ${fontSize}
            ${width}`} 
            onClick={onClick}
           >

            <span>{text}</span> 

        </button>
    )
}

export default memo(Button)