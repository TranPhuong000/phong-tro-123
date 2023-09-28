import React, {memo} from 'react'

const InputFormPass = ({label}) => {
    return (
        <div className='p-1'>
            <label htmlFor='pass' className='text-base uppercase font-semibold text-stone-400'>{label}</label>
            <br/>
            <input 
                type='password'
                className={'outline outline-2 outline-offset-0 outline-gray-400 p-2 rounded-md w-[500px] text-xl'}
                id='pass'
                />
        </div>
    )
}

export default memo(InputFormPass)