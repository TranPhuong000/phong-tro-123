import React from "react";
import { InputForm, Button } from "../../components";
import { InputFormPass } from '../../components'
import GG from '../../assets/604199df880fb029291ddd7c382e828b-removebg-preview.png'
import FB from '../../assets/660bcb3e9408cfa1747d2d6e4c8c4526-removebg-preview.png'


const Signin = () => {
    return (
        <div className=' mw-[500] p-[60px] pl-[100px] pb-[100px]'> 
            <h3 className='font-semibold text-3xl mb-3 uppercase pl-[190px]'>Đăng ký</h3>
            <div className='w=full flex flex-col gap-3' >
                    <InputForm label={'Tài khoản / Email'}></InputForm>
                    <InputFormPass label={'Mật khẩu'}></InputFormPass>
                    <InputFormPass label={'Nhập lại mật khẩu'}></InputFormPass>
                    <InputFormPass label={'Tên đầy đủ'}></InputFormPass>
                    
                    <div>
                        <h6 className="text-center">Bằng cách nhấp vào Đăng ký, bạn đồng ý với bạn đã đồng ý với</h6>
                        <h6 className="text-center hover:text-[blue] text-blue-600">Điều khoản sử dụng</h6>
                    </div>  
                    <Button 
                            text={'Đăng ký'} 
                            fontSize='text-xl'
                            textColor='text-white' 
                            fontWeight='font-bold'
                            textTransform='uppercase' 
                            cursor='cursor-pointer'
                            gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                            Width='w-50'
                            />          
            </div>
 
        </div>
        
   )
}


export default Signin