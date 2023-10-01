import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { InputFormPass } from '../../components'
import { useLocation } from 'react-router-dom'


const Login = () => {
    const location = useLocation()
    const [isRegister, setIsRegister] = useState(location.state?.flag)
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])
    
    console.log(location.state);

    return (
        <div className=' mw-[600] p-[60px] pl-[100px] pb-[100px]'> 
            <h3 className='font-semibold text-3xl mb-3 uppercase text-center'>{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
            <div className='w=full flex flex-col gap-5' >
                    {isRegister && <InputForm label={'Họ tên'}/>}
                    <InputForm label={'Số điện thoại'}></InputForm>
                    <InputFormPass label={'Mật khẩu'}></InputFormPass>
                    <div className="flex flex-col pt-2"></div>
                        <Button 
                            text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
                            fontSize='text-xl'
                            textColor='text-white' 
                            fontWeight='font-bold'
                            textTransform='uppercase' 
                            cursor='cursor-pointer'
                            gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                            />
                    </div>

            <div classNam='mt-7 flex items-center justify-bewteen '>
                    {isRegister 
                    ? <small className="text-xl">Bạn đã có tài khoản?  <span 
                      onClick={() => { setIsRegister (false)}} 
                      className="text-blue-600 hover:text-[blue] cursor-pointer hover:underline"
                    > 
                        Đăng nhập ngay 
                    </span></small>
                    : <>
                        <small className=" uppercase text-xl cursor-pointer hover:text-[blue] hover:underline float-left">Quên mật khẩu?</small>
                        
                        <small onClick={() => { setIsRegister (true)}} className=" uppercase text-xl cursor-pointer hover:text-[blue] hover:underline float-right">Tạo tài khoản mới</small>
                    </>}
            </div>
            
            {/* <div class="inline-flex items-center justify-center w-full">
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
            </div> */}
            </div>
 
        </div>
        
   )
}


export default Login