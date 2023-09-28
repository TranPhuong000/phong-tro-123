import React, { useCallback} from 'react'
import logo from '../../assets/logo-removebg-preview.png'
import { Button } from "../../components"
import { useNavigate } from 'react-router-dom'
import { path } from '../../ultils/constant'




const Header = () => {
    const navigate = useNavigate()
    const goLogin = useCallback(() => { navigate(path.LOGIN)},[])
    const goSignin = useCallback(() => { navigate(path.SIGNIN)},[])
    
    return (
        <div className=" w-full flex items-center justify-bewteen p-5 shadow-lg">
            <img src={logo} 
                 alt="logo" 
                 className="w-[100px] h-[80px] object-contain "/>
            
            
            <div className="flex items-center justify-bewteen gap-12 ml-auto">
                <ul className='flex items-center justify-bewteen gap-12 uppercase text-xl font-semibold'>
                    <li>Phòng trọ</li>
                    <li>Nhà, căn hộ cho thuê</li>
                    <li>Tìm ở ghép</li>
                    <li>Blog</li>
                    <li>Hướng dẫn</li>
                </ul>

                
               
            </div>

            <div className='flex items-center justify-bewteen gap-5 ml-auto'>

                    {/* <ul className='flex items-center justify-bewteen gap-5' >
                        <li>Đăng ký</li>
                        <li>Đăng nhập</li>
                    </ul> */}

                    <Button 
                        text={'đăng nhập'} 
                        fontSize='text-xl'
                        textColor='text-white' 
                        fontWeight='font-bold'
                        textTransform='uppercase' 
                        cursor='cursor-pointer'
                        gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                        onClick={goLogin}
                        />

                    <Button 
                        text={'đăng ký'} 
                        fontSize='text-xl'
                        textColor='text-white' 
                        fontWeight='font-bold'
                        textTransform='uppercase' 
                        cursor='cursor-pointer'
                        gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                        onClick={goSignin}
                        />

                    <Button 
                        text={'đăng tin'} 
                        fontSize='text-xl'
                        textColor='text-white' 
                        fontWeight='font-bold'
                        textTransform='uppercase' 
                        cursor='cursor-pointer'
                        gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                        />
            </div>
            
        </div>
   )
}


export default Header