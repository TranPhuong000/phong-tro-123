import React, { memo } from 'react'


const Button = ( {text, textColor, bgColor, textTransform, cursor, gradientColorStops, fontWeight, fontSize, onClick, Width} ) => {
    console.log('re-render')
    return (
        <button 
            type='button'
            className={`py-2 px-4 
            ${textColor} 
            ${bgColor} outline-none rounded-lg justify-center gap-1
            ${textTransform} 
            ${cursor} 
            ${gradientColorStops} 
            ${fontWeight} 
            ${fontSize}
            ${Width}`} 
            onClick={onClick}
           >

            <span>{text}</span> 

        </button>
    )
}

export default memo(Button)