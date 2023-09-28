import React, {memo} from 'react'

const InputForm = ({label}) => {
    return (
        <div className='p-1'>
            <label htmlFor='phone' className='text-base uppercase font-semibold text-stone-400'>{label}</label>
            <br/>
            <input 
                type='text' 
                className={'outline outline-2 outline-offset-0 outline-gray-400 p-2 rounded-md w-[500px] text-xl'}
                id='phone'
                />
        </div>
    )
}

export default memo(InputForm)