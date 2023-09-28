import React from "react";
import { InputForm, Button } from "../../components";
import { InputFormPass } from '../../components'
import GG from '../../assets/604199df880fb029291ddd7c382e828b-removebg-preview.png'
import FB from '../../assets/660bcb3e9408cfa1747d2d6e4c8c4526-removebg-preview.png'


const Login = () => {
    return (
        <div className=' mw-[600] p-[60px] pl-[100px] pb-[100px]'> 
            <h3 className='font-semibold text-3xl mb-3 uppercase pl-[170px]'>Đăng nhập</h3>
            <div className='w=full flex flex-col gap-3' >
                    <InputForm label={'Tài khoản / Email'}></InputForm>
                    <InputFormPass label={'Mật khẩu'}></InputFormPass>
                    <Button 
                        text={'Đăng nhập'} 
                        fontSize='text-xl'
                        textColor='text-white' 
                        fontWeight='font-bold'
                        textTransform='uppercase' 
                        cursor='cursor-pointer'
                        gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                        Width='w-50'
                        />
            <small className="font-semibold uppercase text-xl pl-[175px] cursor-pointer hover:text-[blue]">Quên mật khẩu?</small>
            
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-80 h-0.5 my-5 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                <span class="absolute px-3 uppercase font-medium text-gray-900 -translate-x-1/4 bg-white left-1/2 dark:text-white dark:bg-gray-900">hoặc </span>
            </div>

            <div className="flex align-items gap-1 pl-[150px]">
                <a><img src={FB} 
                    alt="logo" 
                    className="w-[100px] h-[80px] object-scale-down overflow-visible cursor-pointer"/></a>
                <a> <img src={GG} 
                    alt="logo" 
                    className="w-[100px] h-[80px] object-scale-down overflow-visible cursor-pointer"/></a>
            </div>
            </div>
 
        </div>
        
   )
}


export default Login